import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Placeholder } from '@/components/ui/placeholder';
import { Screen } from '@/components/ui/screen';
import { Spacing } from '@/constants/theme';

const STATS = ['仓库总袋数', '零库存色号', '本月入库', '本月出库'];

export default function DashboardScreen() {
  return (
    <Screen title="视图" subtitle="仓库库存一览">
      <Placeholder text="顶部滑动开关：统计 | 表格（左右滑动切换）" milestone="M4" />

      <View style={styles.grid}>
        {STATS.map((label) => (
          <Card key={label} style={styles.stat}>
            <ThemedText type="small" themeColor="textSecondary">
              {label}
            </ThemedText>
            <ThemedText type="number">—</ThemedText>
          </Card>
        ))}
      </View>

      <Card title="库存分布">
        <Placeholder text="柱状图：剩余 0 / 1 / 2 / 3 / 4 / 5+ 袋的色号数量" milestone="M4" />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.three },
  stat: { flexBasis: '45%', flexGrow: 1 },
});
