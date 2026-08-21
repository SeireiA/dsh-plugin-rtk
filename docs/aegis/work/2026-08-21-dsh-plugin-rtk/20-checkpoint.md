# Todo Checkpoint Draft

## 当前状态

- Active work：第五版批准结果文档同步。
- Implementation：尚未恢复；本轮不编码、不删除实验路径、不提交或推送。
- Completed stages：阶段 0。
- Pending stages：阶段 1 至 9，等待用户明确开始阶段 1。
- Stop gate：rc.7/rc.1 官方 Host/Client/Remote/Slot 任一闭环失败，暂停整个项目。

## 已提交基线

- Branch：`main`。
- HEAD / `origin/main`：`a47830e09f61ce57217a8a797c9b90b2768cfb45`，完全一致。
- Origin：`https://github.com/SeireiA/dsh-plugin-rtk.git`。
- GitHub active account：`SeireiA`。
- 阶段 0 CI：run `32449585110`，Windows/macOS/Linux × Node 20/24 六任务通过。

## 未提交工作树

第四版阶段 1 已产生 Host/Client/Typert/composition 实验文件。standalone Typert projection 依赖协议声明镜像、分析 manifest 和非文档化 generator 假设，偏离第五版官方 API 边界。

处理规则：

1. 当前文档 Slice 保留实验文件，只用于对照。
2. 不把实验文件视为完成证据，不提交或推送。
3. 用户已批准其退休，但尚未发出开始阶段 1 的执行指令。
4. 阶段 1 开始后先生成精确保留/删除清单，再 delete-first 退休任务内部实验路径。
5. 不影响阶段 0 历史、DSH checkout、Profile、用户数据或远端对象。

## 已批准第五版决策

1. Agent 直接调用 RTK wrapper，不透明改写 shell。
2. UI 为“总览、今日、当前仓库”三个标签页。
3. GitHub 所有 `draft:false` Release 可见、可选并可尝试下载安装。
4. RTK `>=0.44.2` 保证兼容；更旧版本尽力兼容且不增加专用分支。
5. 统计跨实际安装且数据可读的历史 Release 聚合。
6. DSH 最低 rc.7，同时验证 rc.1。
7. Client/Remote/Slot 闭环前移到阶段 1；失败暂停整个项目，不发布 Host-only。
8. 复杂 Typert workaround 和 executor replacement 候选退休。

## 研究结论

1. DSH pre-policy 排除输入改写，dispatch 保持 call identity。
2. `ShellExecutor.resolve()` 不承担命令转换。
3. shellEnv 可贡献 fiber-owned `DSH_*` 变量。
4. RTK 官方支持直接 `rtk <tool> <args>`。
5. RTK gain 有官方 JSON；discover 没有适用于 DSH 的稳定 JSON 承诺。
6. npm 官方 registry 当前 `latest=0.1.0-rc.7`、`next=0.1.1-rc.1`；rc.1 是已发布最高版本。

## Drift Check

- Scope：透明 rewrite、executor replacement 和未命中标签退出首版；完整 GUI 保留。
- Statistics：恢复跨已安装、可读 Release 的 gain 聚合。
- RTK compatibility：`v0.44.2` 及以后 guaranteed，更旧 best-effort。
- DSH compatibility：最低 rc.7，rc.1 同时验证。
- Owner：一个 `RtkService`；shellEnv/guidance/Remote 为 contribution/projection。
- Retirement：旧实验路径已批准退休，尚未执行。
- Decision：docs-approved；implementation-waits-explicit-start。

## Resume State Hint

恢复时先读取五份第五版文档和本 checkpoint。只有用户明确要求开始阶段 1，才能处理实验代码。先执行 rc.7/rc.1 官方双端闭环 stop gate；不得把“继续研究”或本次文档批准解释为删除/编码指令。

## Next

完成文档校验并交付用户，等待明确开始阶段 1。
