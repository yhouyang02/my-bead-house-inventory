import { Card } from '@/components/ui/card';
import { Placeholder } from '@/components/ui/placeholder';
import { Screen } from '@/components/ui/screen';

export default function FormScreen() {
  return (
    <Screen title="表单" subtitle="查询库存、记录入库与出库">
      <Card title="查询">
        <Placeholder text="选择色号 → 显示剩余袋数和最近流水" milestone="M3" />
      </Card>
      <Card title="变更">
        <Placeholder
          text="色号 · 入库（进货）/ 出库（上架）· 数量（整袋）· 日期 · 备注"
          milestone="M3"
        />
      </Card>
    </Screen>
  );
}
