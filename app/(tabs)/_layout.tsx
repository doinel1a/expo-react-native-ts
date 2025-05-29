import React from 'react';

import type { ComponentProps } from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

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
        headerShown: false,
        tabBarStyle: {
          height: 55
        }
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => <TabIcon icon={tab.icon} color={color} />
          }}
        />
      ))}
    </Tabs>
  );
}

type TTabIcon = {
  icon: ComponentProps<typeof FontAwesome>['name'];
  color: string;
};

function TabIcon({ icon, color }: Readonly<TTabIcon>) {
  return <FontAwesome name={icon} size={23} color={color} />;
}
