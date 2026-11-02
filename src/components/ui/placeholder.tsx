import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

/** 开发阶段的占位提示：说明该区域会在哪个里程碑实现 */
export function Placeholder({ text, milestone }: { text: string; milestone: string }) {
  const theme = useTheme();
  return (
    <View style={[styles.box, { borderColor: theme.border, backgroundColor: theme.backgroundElement }]}>
      <ThemedText type="small" themeColor="textSecondary">
        {text}
      </ThemedText>
      <View style={[styles.badge, { backgroundColor: theme.accentSoft }]}>
        <ThemedText type="smallBold" style={{ color: theme.accent }}>
          {milestone}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: Radius.medium,
    borderWidth: 1,
    borderStyle: 'dashed',
    padding: Spacing.three,
    gap: Spacing.two,
    alignItems: 'flex-start',
  },
  badge: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    borderRadius: Radius.small,
  },
});
