import type { ViewStyle, TextStyle } from 'react-native';
import type { IStyleProps } from '../constants/type';

export type IButtonProps = IStyleProps & {
  onPress: () => void;
  text: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  activityIndicatorColor?: string,
  row?: boolean,
}
