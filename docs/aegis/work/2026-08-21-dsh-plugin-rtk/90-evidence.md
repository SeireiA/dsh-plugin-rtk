# Evidence Bundle Draft

## 阶段 0 基线

- `pwd`：`E:\Projects\test\dsh-plugin-rtk`。
- 初始状态：无 Git repository，仅有 5 份计划文档。
- GitHub active account：`SeireiA`。
- 初始工具链：Node `v24.16.0`、pnpm `11.22.0`、Git `2.54.0.windows.1`、DSH `0.1.0-rc.7`。

## 阶段 0 验证

- 项目 package manager 固定为 pnpm 10.34.5。
- dependency-cruiser 固定 17.4.3，tsdown 固定 0.21.10，以支持 Node 20.19。
- Node 20 复验使用 `v20.20.2 + pnpm 10.34.5`，完整 `pnpm run check` 通过。
- CI run `32449585110`：Windows/macOS/Linux × Node 20/24 六任务通过。
- 阶段 0 SHA：`a47830e09f61ce57217a8a797c9b90b2768cfb45`；本地与 `origin/main` 一致。
- Format、ESLint、400 行、dependency-cruiser、knip、jscpd、TypeScript：通过。
- Vitest：1 个文件、2 个测试通过，statements/branches/functions/lines 100%。
- tsdown 产物与 package exports 一致；`pnpm pack --dry-run` 通过。
- GitHub repository：公开、非 fork、Issues 开启。
- Topics：`dsh-plugin`、`deepseek-harness`、`rtk`、`token-saver`。
- Author：`SeireiA <62344887+SeireiA@users.noreply.github.com>`。

## 第五版研究证据

- DSH publish 文档记录 `dsh.bundle` patch 和 `dsh plugin add`。
- DSH shell 文档把 `resolve` 定义为默认值/cap，把 `run/start` 定义为执行边界。
- DSH tools 文档明确 pre-policy 排除输入改写，around-dispatch 保持 call identity。
- DSH shellEnv 文档允许插件注册并按 fiber 释放自有 `DSH_*` 变量。
- DSH API Gateway 要求官方生成 Typert artifact；现有实验 workaround 不构成公开 API 证据。
- RTK Codex awareness 展示 `rtk git status`、`rtk cargo test` 等直接调用。
- RTK gain 文档提供 `--all --format json`。
- RTK discover 文档未给出适用于 DSH 的稳定 JSON contract。
- RTK telemetry 文档确认 `RTK_TELEMETRY_DISABLED=1`。
- RTK `v0.45.0` GitHub API：release id `366651013`、`draft:false`、`prerelease:false`；目标平台资产和 `checksums.txt` 带 SHA-256 digest。
- npm 官方 registry：`@deepseek-ai/dsh` dist-tags 为 `latest=0.1.0-rc.7`、`next=0.1.1-rc.1`；versions 列表包含两者，rc.1 为最高已发布版本。

## 用户批准记录

2026-08-21 用户逐项确认：

1. 首版不透明接管 shell，由 Agent 直接调用 RTK wrapper。
2. 首版移除“未命中语句”，保留总览、今日、当前仓库。
3. 所有公开 Release 可见、可选、可尝试下载安装。
4. RTK `v0.44.2` 及以后保证兼容，更旧版本尽力兼容。
5. 统计跨实际安装且数据可读的历史 Release 聚合。
6. 最低兼容 DSH rc.7，同时验证 rc.1。
7. Stage 1 前置官方 Client/Remote/Slot 闭环；失败暂停整个项目。
8. 不发布 Host-only 残缺版本，不制作复杂 workaround。
9. 现有未提交 Stage 1 实验代码不作为基线，实施开始后退休并从阶段 0 public surface 重做。

## 第五版决策影响

- 透明 rewrite/executor replacement 不再是首版架构。
- 原 DSH shell 工具和 shellEnv wrapper 是命令执行主路径。
- 跨版本 gain 保留；未命中分析退出首版。
- Client/Typert stop gate 从阶段 6 前移到阶段 1，并覆盖 rc.7/rc.1。
- GUI 是完成硬要求；门禁失败不允许 Host-only 发布。
- 旧实验代码未提交、未推送、未形成阶段证据，也未在本次文档 Slice 删除。

## 风险

- 阶段 0 不能证明第五版 DSH 或 RTK 功能。
- rc.7/rc.1 外部 Typert 和 Client loader 闭环尚未实测。
- RTK `v0.44.2` 之前版本可能缺资产、校验、direct command 或 gain JSON；失败只阻止该候选，不触发专用兼容层。
- 本轮只更新文档；任何实现完成声明都必须等待阶段 1 至 9 的独立证据。
