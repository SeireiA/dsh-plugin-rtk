# 变更日志

本项目的所有重要变更都会记录在此文件中。

格式参考 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)。首个公开版本发布后，项目遵循语义化版本规范。

## [未发布]

### 新增

- 已批准的中文开发、架构、界面、工程和验收计划。
- 标准 TypeScript 工程骨架与可执行的质量门禁。

### 修复

- 将开发包管理器固定为支持 Node.js 20 的 pnpm 10.34.5，保持三平台兼容性验证可执行。
- 固定最后支持 Node.js 20 的 dependency-cruiser 17.4.3 与 tsdown 0.21.10，避免质量门禁先于插件运行时放弃受支持平台。

[未发布]: https://github.com/SeireiA/dsh-plugin-rtk/compare/v0.1.0...HEAD
