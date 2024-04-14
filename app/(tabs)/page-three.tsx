import React from 'react';
import { View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import Salute from '@/components/salute';

export default function PageThree() {
  return (
    <View className='flex flex-1 flex-col items-center justify-center'>
      <StatusBar style='auto' />

      <Salute text='Hello, Page three!' />
    </View>
  );
}
