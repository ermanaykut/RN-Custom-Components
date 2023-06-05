import type { ViewStyle, ViewProps } from 'react-native';
import type { IStyleProps } from '../constants/type';

export type IViewProps = IStyleProps & {
  row?: boolean;
  children?: React.ReactNode;
  style?: ViewStyle;
  otherProps?: ViewProps;
 
};
