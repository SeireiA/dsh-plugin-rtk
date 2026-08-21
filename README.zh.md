# dsh-plugin-rtk

这是一个 DeepSeek Harness 插件，计划把 shell 命令改写和输出压缩委托给官方 [RTK](https://github.com/rtk-ai/rtk)，减少模型可见的命令输出 Token。

> 当前状态：正在实施，尚不能作为 DSH 插件安装。

## 目标

- 保留 DSH sandbox、approval、timeout、workdir、后台任务和退出码语义。
- 每条非空 shell 命令使用活动 RTK 的 `rtk rewrite` 判定，不复制 RTK 命令白名单。
- 展示 GitHub 中全部公开 RTK Release，包括稳定版、预发布版和历史版本。
- 只有具备本平台官方资产、SHA-256 校验并通过兼容性测试的候选才能激活。
- RTK binary 与 history database 按 Release 隔离，更新失败时可安全回滚。
- 在 DSH Web 右下角显示可拖动的“已节省 / 总接管”估算 Token 悬浮球。
- 数据保持本地，并始终禁用 RTK telemetry。

## 开发

环境要求：

- Node.js 20.19 或更高版本
- pnpm 10.34.5
- Git

```sh
pnpm install --frozen-lockfile
pnpm run check
```

质量门禁包括格式、lint、所有手工文件 400 行硬限制、依赖边界、未使用代码、重复率、严格 TypeScript、覆盖率、bundle 和发布包元数据。

## 实施纪律

权威计划位于 [`docs/开发计划.md`](docs/开发计划.md)。每个阶段都必须完成验证、提交、推送，并确认本地 SHA 与 `origin/main` 一致后才能进入下一阶段。

## 隐私与安全

插件不会执行 `rtk init`、安装全局 Hook、修改 shell Profile 或上传命令历史。DSH 始终是唯一权限权威。安全问题报告方式见 [SECURITY.md](SECURITY.md)。

## License

[MIT](LICENSE)
