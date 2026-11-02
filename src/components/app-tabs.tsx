import { NativeTabs } from 'expo-router/native-tabs';

import { useTheme } from '@/hooks/use-theme';

/**
 * 底部三个 Tab：说明 / 视图 / 表单。
 * iOS 用 SF Symbols 图标，安卓用 Material 图标。默认打开"视图"（index）。
 */
export default function AppTabs() {
  const theme = useTheme();

  return (
    <NativeTabs
      backgroundColor={theme.card}
      indicatorColor={theme.accentSoft}
      tintColor={theme.accent}
      labelStyle={{ selected: { color: theme.accent } }}>
      <NativeTabs.Trigger name="help">
        <NativeTabs.Trigger.Label>说明</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'book', selected: 'book.fill' }} md="menu_book" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>视图</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="chart.bar.fill" md="bar_chart" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="form">
        <NativeTabs.Trigger.Label>表单</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="square.and.pencil" md="edit_note" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
