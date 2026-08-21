/**
 * 文件职责：验证阶段 0 最小公共导出和 bundle 输入保持一致。
 * 测试边界：这里只证明工程链路，不把尚未实现的 DSH 或 RTK 行为伪装成通过。
 */

import { describe, expect, it } from 'vitest'

import { packageIdentity } from '../src/index.js'

describe('packageIdentity', () => {
  it('暴露稳定的包名和首版版本', () => {
    expect(packageIdentity).toEqual({
      name: 'dsh-plugin-rtk',
      version: '0.1.0',
    })
  })

  it('阻止调用方修改共享包身份', () => {
    expect(Object.isFrozen(packageIdentity)).toBe(true)
  })
})
