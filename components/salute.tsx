import React from 'react';

import { Text } from 'react-native';

type TSalute = {
  text: string;
};

export default function Salute({ text }: Readonly<TSalute>) {
  return <Text className='text-xl font-semibold'>{text}</Text>;
}
