import React from 'react';
import { NumberInput } from '@expo/react-native-number-input';

const LoginScreen = () => {
  const [value, setValue] = React.useState(0);

  return (
    <NumberInput
      value={value}
      onChange={setValue}
      minValue={0}
      maxValue={10}
    />
  );
};
