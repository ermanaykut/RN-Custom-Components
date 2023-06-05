import * as React from 'react';
import { Icon, Input, View } from 'custom-components';
import { LogBox } from 'react-native';
import { TextInput } from 'react-native-paper';

LogBox.ignoreLogs(['Possible Unhandled Promise']);

export default function App() {
  return (
    <View p={20}>
      <Input
        left={
          <TextInput.Icon
            icon={() => (
              <Icon name="pencil : materialcomm" size={30} color="blue" />
            )}
          />
        }
      />
    </View>
  );
}
