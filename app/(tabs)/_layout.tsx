import React from 'react';
import { Text, View } from 'react-native';

import { Tabs } from 'expo-router';

import type { ComponentProps } from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome';

type TTab = {
  name: string;
  title: string;
  icon: ComponentProps<typeof FontAwesome>['name'];
};

const tabs: TTab[] = [
  {
    name: 'index',
    title: 'Home',
    icon: 'home'
  },
  {
    name: 'page-one',
    title: 'Page one',
    icon: 'search'
  },
  {
    name: 'page-two',
    title: 'Page two',
    icon: 'user'
  },
  {
    name: 'page-three',
    title: 'Page three',
    icon: 'bookmark'
  }
];

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 84,
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 5,
          paddingRight: 5
        }
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon title={tab.title} icon={tab.icon} isFocused={focused} />
            )
          }}
        />
      ))}
    </Tabs>
  );
}

type TTabIcon = {
  title: string;
  icon: ComponentProps<typeof FontAwesome>['name'];
  isFocused: boolean;
};

function TabIcon({ title, icon, isFocused }: TTabIcon) {
  return (
    <View
      className={`flex h-full w-full items-center justify-center rounded-md ${isFocused ? 'bg-blue-500' : ''}`}
    >
      <FontAwesome name={icon} size={30} color={isFocused ? '#fff' : '#d1d5db'} />
      <Text
        className={`text-xs ${isFocused ? 'font-semibold text-white' : 'font-normal text-gray-300'}`}
      >
        {title}
      </Text>
    </View>
  );
}
