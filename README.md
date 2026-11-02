# 拼豆库存（my-bead-house-inventory）

拼豆手工店的仓库库存管理 App。iOS / 安卓跨平台，数据全部存在本机（明文 CSV / JSON，可导出导入）。

- 技术栈：Expo SDK 58 · React Native · TypeScript · Expo Router（原生底部 Tab）
- 三个页面：说明 / 视图 / 表单

## 本地运行（Windows）

```bash
npm install
npx expo start
```

手机安装 Expo Go，与电脑连同一 Wi-Fi，扫描终端二维码。连不上时改用 `npx expo start --tunnel`。

## 开发检查

```bash
npm run typecheck
npm run lint
```

## 里程碑

- [x] M0 环境准备
- [x] M1 App 框架（三个 Tab）
- [ ] M2 数据层（流水 CSV、库存计算、单元测试）
- [ ] M3 表单页（查询、入库 / 出库）
- [ ] M4 视图页（统计 / 表格滑动切换、库存分布柱状图）
- [ ] M5 导入导出、完整 MARD 221 色
- [ ] M6 说明页
- [ ] M7 打磨与发布 1.0
