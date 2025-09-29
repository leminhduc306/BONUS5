import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '../../hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#185ECE',
        headerShown: false,
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
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="all-apps"
        options={{
          title: 'All Apps',
          tabBarLabel: 'All Apps',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'apps' : 'apps-outline'} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="gold"
        options={{
          title: 'Gold',
          tabBarLabel: 'Gold',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'trophy' : 'trophy-outline'} size={24} color={color} />
          ),
        }}
       />
      <Tabs.Screen
        name="game"
        options={{
          title: 'Game',
          tabBarLabel: 'Game',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'game-controller' : 'game-controller-outline'} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
