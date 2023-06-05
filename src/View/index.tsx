import { View as V } from 'react-native';
import React from 'react';
import styles from './style';
import type { IViewProps } from './interface';

export default function View({
  row = false,
  children,
  style,
  otherProps,
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
  flex = 1,
  alignItems = 'center',
  alignSelf = 'center',
  justifyContent = 'center',
  backgroundColor = 'white',
  w = '100%',
  h,
}: IViewProps) {
  return (
    <V
      style={[
        styles.container,
        row && styles.row,
        style,
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
      {...otherProps}
    >
      {children}
    </V>
  );
}
