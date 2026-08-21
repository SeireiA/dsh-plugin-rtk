/**
 * 文件职责：把公共 TypeScript 入口打包成 Node ESM 与声明文件。
 * 阶段边界：阶段 1 才增加 Host/Client 双入口；当前配置只验证标准工程链路。
 */

import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  fixedExtension: false,
  format: ['esm'],
  outDir: 'lib',
  platform: 'node',
  sourcemap: true,
  target: 'node20',
})
