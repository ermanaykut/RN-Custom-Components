import { Pressable, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import type { IButtonProps } from './interface';
import styles from './style';

const Button = ({
  onPress = () => {},
  text = '',
  containerStyle,
  textStyle,
  disabled = false,
  activityIndicatorColor = 'gray',
  row = false,
  m = 0,
  ml = m,
  mr = m,
  mt = m,
  mb = m,
  p = 0,
  pl = p,
  pr = p,
  pt = p,
  pb = p,
  flex,
  alignItems = 'center',
  alignSelf = 'center',
  justifyContent = 'center',
  backgroundColor = 'white',
  w = '100%',
  h,
}: IButtonProps) => {
  return (
    <Pressable
      disabled={disabled}
      style={[
        styles.container,
        containerStyle,
        row && styles.row,
        {
          margin: m,
          marginLeft: ml,
          marginRight: mr,
          marginBottom: mb,
          marginTop: mt,
          padding: p,
          paddingLeft: pl,
          paddingRight: pr,
          paddingBottom: pb,
          paddingTop: pt,
          flex,
          backgroundColor,
          alignItems,
          alignSelf,
          justifyContent,
          width: w,
          height: h,
        },
      ]}
      onPress={onPress}
    >
      {disabled && <ActivityIndicator color={activityIndicatorColor} />}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
  );
};

export default Button;
