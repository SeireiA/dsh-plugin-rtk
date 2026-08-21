/**
 * 文件职责：统一单元、契约与服务测试发现规则和全局覆盖率门禁。
 * 高风险 Owner 在对应阶段出现时追加更高的目录级门禁，不在阶段 0 伪造空目录。
 */

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      exclude: ['src/**/*.d.ts'],
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      provider: 'v8',
      reporter: ['text', 'json-summary', 'html'],
      thresholds: {
        branches: 80,
        functions: 85,
        lines: 85,
        statements: 85,
      },
    },
    include: ['tests/**/*.spec.ts', 'tests/**/*.spec.tsx'],
    restoreMocks: true,
  },
})
