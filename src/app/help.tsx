import Constants from 'expo-constants';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Placeholder } from '@/components/ui/placeholder';
import { Screen } from '@/components/ui/screen';

export default function HelpScreen() {
  return (
    <Screen title="说明" subtitle="色系、使用教程与数据管理">
      <Card title="术语">
        <ThemedText type="small">
          <ThemedText type="smallBold">入库（进货）</ThemedText>
          ：从厂商收到拼豆，存入仓库。
        </ThemedText>
        <ThemedText type="small">
          <ThemedText type="smallBold">出库（上架）</ThemedText>
          ：从仓库取出上架供客人使用，属于消耗，计入成本。
        </ThemedText>
        <ThemedText type="small">数量单位为“袋”，只能是正整数。</ThemedText>
      </Card>

      <Card title="支持的色系">
        <Placeholder text="MARD 221色（按色系分组展示全部色号）" milestone="M5 / M6" />
      </Card>

      <Card title="使用教程">
        <Placeholder text="入库、出库、查询、备份的操作步骤" milestone="M6" />
      </Card>

      <Card title="数据管理">
        <Placeholder text="导出流水、导入流水、上次备份时间" milestone="M5" />
      </Card>

      <ThemedText type="small" themeColor="textSecondary" style={{ textAlign: 'center' }}>
        版本 {Constants.expoConfig?.version ?? '-'}
      </ThemedText>
    </Screen>
  );
}
