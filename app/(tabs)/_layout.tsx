import GoldActiveIcon from '@/components/icons/GoldActiveIcon';
import GoldIcon from '@/components/icons/GoldIcon';
import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import AllAppsActiveIcon from '@/components/icons/AllAppsActiveIcon';
import AllAppsIcon from '@/components/icons/AllAppsIcon';
import GameActiveIcon from '@/components/icons/GameActiveIcon';
import GameIcon from '@/components/icons/GameIcon';
import HomeActiveIcon from '@/components/icons/HomeActiveIcon';
import HomeIcon from '@/components/icons/HomeIcon';
import ProfileActiveIcon from '@/components/icons/ProfileActiveIcon';
import ProfileIcon from '@/components/icons/ProfileIcon';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#185ECE',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: true,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          paddingTop: 6,
          paddingBottom: 0,
          height: 64,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 2,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            focused ? <HomeActiveIcon size={28} /> : <HomeIcon size={22} color={'#8b8b8b'} opacity={1} />
          ),
        }}
      />
      <Tabs.Screen
        name="all-apps"
        options={{
          title: 'All Apps',
          tabBarLabel: 'All Apps',
          tabBarIcon: ({ focused }) => (
            focused ? <AllAppsActiveIcon size={28} /> : <AllAppsIcon size={20} color={'#8b8b8b'} opacity={1} />
          ),
        }}
      />
      <Tabs.Screen
        name="gold"
        options={{
          title: 'Gold',
          tabBarLabel: 'Gold',
          tabBarIcon: ({ focused }) => (
            focused ? <GoldActiveIcon size={28} /> : <GoldIcon size={22} />
          ),
        }}
       />
      <Tabs.Screen
        name="game"
        options={{
          title: 'Game',
          tabBarLabel: 'Game',
          tabBarIcon: ({ focused }) => (
            focused ? <GameActiveIcon size={28} /> : <GameIcon size={24} color={'#8b8b8b'} opacity={1} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
            focused ? <ProfileActiveIcon size={28} /> : <ProfileIcon size={20} color={'#8b8b8b'} opacity={1} />
          ),
        }}
      />
    </Tabs>
  );
}
