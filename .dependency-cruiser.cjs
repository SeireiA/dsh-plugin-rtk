/**
 * 文件职责：验证模块依赖无环，并阻止 Host、Client 与 Owner 私有实现越界。
 * 规则只描述架构方向，不重复 TypeScript 或 ESLint 的语法检查。
 */

module.exports = {
  forbidden: [
    {
      name: 'no-circular',
      severity: 'error',
      comment: '任何循环依赖都会模糊 Owner 生命周期和初始化顺序。',
      from: {},
      to: { circular: true },
    },
    {
      name: 'host-does-not-import-client',
      severity: 'error',
      from: { path: '^src/host' },
      to: { path: '^src/client' },
    },
    {
      name: 'client-does-not-import-host',
      severity: 'error',
      from: { path: '^src/client' },
      to: { path: '^src/host' },
    },
    {
      name: 'tests-do-not-own-production',
      severity: 'error',
      from: { path: '^src' },
      to: { path: '^tests' },
    },
    {
      name: 'owner-private-imports-stay-local',
      severity: 'error',
      comment: '跨 Owner 只能导入 public index，禁止深入其他 Owner 私有文件。',
      from: { path: '^src/(host|client)/([^/]+)/' },
      to: {
        path: '^src/(host|client)/([^/]+)/(?!index\\.(ts|tsx)$)',
        pathNot: '^$1/$2/',
      },
    },
  ],
  options: {
    doNotFollow: { path: 'node_modules' },
    exclude: {
      path: '(^|/)(coverage|dist|lib|node_modules|playwright-report|test-results)/',
    },
    tsConfig: { fileName: 'tsconfig.json' },
  },
}
