# Security Policy

## Supported versions

首个可安装版本尚未发布。发布后，本文件将列出仍接受安全修复的版本。

## Reporting a vulnerability

请使用 GitHub repository 的 private vulnerability reporting 功能，不要在公开 Issue 中提交可利用细节、凭据、命令历史或用户路径。

报告应包含：

- 受影响版本和平台。
- 最小复现步骤。
- 对 DSH sandbox、approval、下载校验、归档解压、路径或本地数据的影响。
- 已知缓解方式。

维护者会在 7 天内确认接收状态。修复发布前，请避免公开利用细节。

## Security boundaries

- DSH 是唯一权限权威，RTK rewrite 的 permission 结果不能绕过 DSH approval。
- RTK binary 只接受官方 Release 资产，并验证 SHA-256。
- 归档解压拒绝绝对路径、父目录穿越、符号链接和硬链接。
- 命令诊断在持久化前脱敏，不保存输出、环境对象或模型消息。
- RTK telemetry 始终禁用。
- 插件不修改用户 PATH、shell rc、PowerShell Profile 或全局 RTK 配置。
