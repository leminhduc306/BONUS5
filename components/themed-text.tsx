import { Text, TextProps } from 'react-native';
import { useThemeColor } from '../hooks/use-theme-color';

export function ThemedText(props: TextProps & { type?: 'title' | 'default' }) {
  const color = useThemeColor({}, 'text');
  return <Text {...props} style={[{ color }, props.style]} />;
}
