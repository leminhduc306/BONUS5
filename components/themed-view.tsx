import { View, ViewProps } from 'react-native';
import { useThemeColor } from '../hooks/use-theme-color';

export function ThemedView(props: ViewProps) {
  const backgroundColor = useThemeColor({}, 'background');
  return <View {...props} style={[{ backgroundColor }, props.style]} />;
}
