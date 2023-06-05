import type { TextStyle } from 'react-native';
import type { TextInputProps } from 'react-native-paper';

export interface IInputProps {
  /**
   *style about input's frame
   */
  mode?: 'flat' | 'outlined';
  /**
   * You can render any icon to Input's left.
   */
  left?: React.ReactNode;
  /**
   * You can render any icon to Input's right.
   */
  right?: React.ReactNode;
  /**
   * If true, user won't be able to interact with the component.
   */
  disabled?: boolean;
  /**
   * The text or component to use for the floating label.
   */
  label?: string | React.ReactElement;
  /**
   * Placeholder for the input.
   */
  placeholder?: string;
  /**
   * Whether to style the TextInput with error style.
   */
  error?: boolean;
  /**
   * Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.
   */
  onChangeText?: () => void;
  /**
   * Inactive outline color of the input.
   */
  outlineColor?: string;
  /**
   * Active outline color of the input.
   */
  activeOutlineColor?: string;
  /**
   * Color of the text in the input.
   */
  textColor?: string;
  /**
   * Whether the input can have multiple lines.
   */
  multiline?: boolean;
  /**
   * The number of lines to show in the input (Android only).
   */
  numberOfLines?: number;
  /**
   * Pass `fontSize` prop to modify the font size inside `TextInput`.
   * Pass `height` prop to set `TextInput` height. When `height` is passed,
   * `dense` prop will affect only input's `paddingVertical`.
   * Pass `paddingHorizontal` to modify horizontal padding.
   * This can be used to get MD Guidelines v1 TextInput look.
   */
  style?: TextStyle;
  /**
   * other input's props
   */
  otherProps?: TextInputProps;
}