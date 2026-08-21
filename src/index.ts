/**
 * 文件职责：提供阶段 0 的最小公共包身份，证明 TypeScript、测试与打包链路可运行。
 * 输入输出：无运行时输入，导出不可变的包名与版本元数据。
 * 生命周期：模块加载时仅创建常量，不启动进程、网络、计时器或全局副作用。
 * 禁止职责：本文件不实现 DSH、RTK 或 Client 行为；相关 Owner 在后续阶段独立建立。
 */

export const packageIdentity = Object.freeze({
  name: 'dsh-plugin-rtk',
  version: '0.1.0',
})
