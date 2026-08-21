/**
 * 文件职责：验证发布元数据、bundle 入口和发布文件边界。
 * 输入输出：读取 package.json 与 lib 入口，违规时以非零退出。
 * 生命周期：只读检查，不触发 pack，避免 prepack 递归。
 * 禁止职责：不替代 pnpm pack、测试或 DSH 安装验收。
 */

import { access, readFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const REQUIRED_FIELDS = [
  'name',
  'version',
  'description',
  'license',
  'repository',
  'bugs',
  'homepage',
  'exports',
  'files',
  'engines',
]
const FORBIDDEN_PACKAGE_PATHS = [
  'coverage',
  'node_modules',
  'playwright-report',
  'test-results',
  'tests',
  'tmp',
]

/** 读取并解析结构化 package.json，解析失败直接交给调用方终止门禁。 */
async function readPackageJson() {
  const source = await readFile(path.join(ROOT, 'package.json'), 'utf8')
  return JSON.parse(source)
}

/**
 * 验证字段与发布 allowlist。
 * files 必须采用明确列表，禁止把测试、数据库或本机依赖树带入 tarball。
 */
function validateMetadata(manifest) {
  const errors = []
  for (const field of REQUIRED_FIELDS) {
    if (manifest[field] === undefined) errors.push(`缺少 package 字段：${field}`)
  }
  if (manifest.name !== 'dsh-plugin-rtk') errors.push('package name 不正确')
  if (!Array.isArray(manifest.files)) errors.push('files 必须是数组')
  else {
    for (const candidate of FORBIDDEN_PACKAGE_PATHS) {
      if (manifest.files.includes(candidate))
        errors.push(`files 禁止包含：${candidate}`)
    }
  }
  return errors
}

/** 确认 bundle 已生成且入口与 exports 一致。 */
async function validateBundle(manifest) {
  const errors = []
  const defaultExport = manifest.exports?.['.']?.default
  const typesExport = manifest.exports?.['.']?.types
  for (const candidate of [defaultExport, typesExport]) {
    if (typeof candidate !== 'string') {
      errors.push('根 exports 必须同时声明 default 和 types')
      continue
    }
    try {
      await access(path.join(ROOT, candidate))
    } catch {
      errors.push(`bundle 入口不存在：${candidate}`)
    }
  }
  return errors
}

/** 执行发布边界检查并一次报告全部问题。 */
async function main() {
  const manifest = await readPackageJson()
  const errors = [...validateMetadata(manifest), ...(await validateBundle(manifest))]
  if (errors.length > 0) {
    console.error(errors.join('\n'))
    process.exitCode = 1
    return
  }
  console.log('发布包门禁通过：元数据、allowlist 与 bundle 入口一致。')
}

await main()
