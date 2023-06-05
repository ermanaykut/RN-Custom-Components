import * as React from 'react';

import { PaperProvider } from 'react-native-paper';

import Button from './Button';
import View from './View';
import Input from './Input';
import Icon from './Icon';

export { Button, Input, View, Icon };

const ComponentProvider = ({ children }: any) => {
  <PaperProvider>{children}</PaperProvider>;
};

export default ComponentProvider;
