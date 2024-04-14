import { Pressable, Text, View } from 'react-native';

import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import Salute from '@/components/salute';

export default function PageOne() {
  return (
    <View className='flex flex-1 flex-col items-center justify-center'>
      <StatusBar style='auto' />

      <Salute text='Hello, Page one!' />

      <Link href='/' asChild>
        <Pressable className='mt-2.5 rounded-md bg-blue-300 px-2.5 py-1'>
          <Text>Go to Homepage</Text>
        </Pressable>
      </Link>
    </View>
  );
}
