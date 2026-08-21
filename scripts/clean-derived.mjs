/**
 * 文件职责：删除仓库内可重建的派生产物，供本地重建与阶段 9 清场使用。
 * 输入输出：默认删除构建/测试产物；传入 --include-dependencies 时额外删除 node_modules。
 * 生命周期：只操作项目根下固定 allowlist，不跟随用户输入路径。
 * 禁止职责：不删除 DSH Profile、RTK runtime、Git 历史或用户目录。
 */

import { rm } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DERIVED_PATHS = ['coverage', 'dist', 'lib', 'playwright-report', 'test-results']

/**
 * 将固定相对路径约束在项目根内。
 * 即使未来 allowlist 被误改，也不能越界删除相邻项目或用户状态。
 */
function resolveOwnedPath(relativePath) {
  const absolutePath = path.resolve(ROOT, relativePath)
  if (!absolutePath.startsWith(`${ROOT}${path.sep}`)) {
    throw new Error(`拒绝删除项目根外路径：${relativePath}`)
  }
  return absolutePath
}

/** 按明确 allowlist 删除派生目录；不存在时保持幂等。 */
async function main() {
  const targets = [...DERIVED_PATHS]
  if (process.argv.includes('--include-dependencies')) targets.push('node_modules')
  for (const target of targets) {
    await rm(resolveOwnedPath(target), { force: true, recursive: true })
    console.log(`已清理：${target}`)
  }
}

await main()
