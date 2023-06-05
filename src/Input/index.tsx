import React from 'react';

import { TextInput } from 'react-native-paper';
import styles from './style';
import type { IInputProps } from './interface';

export default function Input({
  mode = 'outlined',
  disabled = false,
  error = false,
  label = '',
  placeholder = '',
  left,
  right,
  multiline = false,
  numberOfLines = 1,
  onChangeText = () => {},
  style,
  outlineColor = 'rgba(0,0,0,.2)',
  activeOutlineColor = 'rgba(0,0,0,.6)',
  textColor = 'black',
  otherProps,
}: IInputProps) {
  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      style={[styles.input, style]}
      disabled={disabled}
      error={error}
      mode={mode}
      left={left}
      right={right}
      multiline={multiline}
      numberOfLines={numberOfLines}
      onChangeText={onChangeText}
      outlineColor={outlineColor}
      activeOutlineColor={activeOutlineColor}
      textColor={textColor}
      {...otherProps}
    />
  );
}