/**
 * 文件职责：对全部手工维护文本执行 400 个物理行硬门禁。
 * 输入输出：读取项目文件集合，成功时输出逐文件摘要，违规时以非零退出。
 * 生命周期：只读扫描，不修改文件；生成目录与明确 allowlist 文件才可排除。
 * 禁止职责：不承担格式化、复杂度或发布包内容检查。
 */

import { execFileSync } from 'node:child_process'
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const MAX_LINES = 400
const IGNORED_DIRECTORIES = new Set([
  '.git',
  'coverage',
  'dist',
  'lib',
  'node_modules',
  'playwright-report',
  'test-results',
])
const GENERATED_FILES = new Set(['pnpm-lock.yaml'])
const BINARY_EXTENSIONS = new Set([
  '.gif',
  '.ico',
  '.jpeg',
  '.jpg',
  '.png',
  '.tgz',
  '.webp',
  '.zip',
])

/**
 * 递归收集未被生成目录排除的项目文件。
 * Git 尚未初始化时也必须工作，保证阶段 0 首次提交前就能执行门禁。
 */
async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    if (entry.isDirectory() && IGNORED_DIRECTORIES.has(entry.name)) continue
    const absolutePath = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...(await walk(absolutePath)))
    else if (entry.isFile()) files.push(path.relative(ROOT, absolutePath))
  }
  return files
}

/**
 * 优先使用 Git 文件集合，同时纳入尚未暂存的新文件。
 * Git 命令不可用时回退目录遍历，不把工具状态误判为代码合规。
 */
async function listProjectFiles() {
  try {
    const output = execFileSync(
      'git',
      [
        '-c',
        'core.quotepath=false',
        'ls-files',
        '--cached',
        '--others',
        '--exclude-standard',
        '-z',
      ],
      { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
    )
    // NUL 分隔避免中文转义、引号和文件名换行破坏集合边界。
    return output.split('\0').filter(Boolean)
  } catch {
    return walk(ROOT)
  }
}

/** 按编辑器可见物理行计数，末尾换行不额外制造空白行。 */
function countPhysicalLines(text) {
  if (text.length === 0) return 0
  const normalized = text.replaceAll('\r\n', '\n')
  const lines = normalized.split('\n').length
  return normalized.endsWith('\n') ? lines - 1 : lines
}

/** 判断文件是否属于允许跳过的生成物或已知二进制。 */
function shouldSkip(relativePath) {
  const normalized = relativePath.replaceAll('\\', '/')
  if (GENERATED_FILES.has(normalized)) return true
  return BINARY_EXTENSIONS.has(path.extname(normalized).toLowerCase())
}

/** 执行完整扫描并聚合全部违规，避免一次只暴露一个超限文件。 */
async function main() {
  const files = [...new Set(await listProjectFiles())].sort()
  const violations = []
  let checked = 0
  for (const relativePath of files) {
    if (shouldSkip(relativePath)) continue
    const text = await readFile(path.join(ROOT, relativePath), 'utf8')
    const lines = countPhysicalLines(text)
    checked += 1
    if (lines > MAX_LINES) violations.push(`${relativePath}: ${lines}`)
  }
  if (violations.length > 0) {
    console.error(`文件超过 ${MAX_LINES} 行：\n${violations.join('\n')}`)
    process.exitCode = 1
    return
  }
  console.log(`行数门禁通过：检查 ${checked} 个手工文本，最大 ${MAX_LINES} 行。`)
}

await main()
