import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';

// Import screens directly
import AllAppsScreen from './app/(tabs)/all-apps';
import GameScreen from './app/(tabs)/game';
import GoldScreen from './app/(tabs)/gold';
import HomeScreen from './app/(tabs)/index';
import ProfileScreen from './app/(tabs)/profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Tab.Navigator
        initialRouteName="Profile"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#185ECE',
          tabBarLabelPosition: 'below-icon',
          tabBarStyle: { height: 64, paddingTop: 6, paddingBottom: 0 },
          tabBarLabelStyle: { fontSize: 12, fontWeight: '500', marginTop: 2 },
          tabBarIcon: ({ focused, color, size }) => {
            const map = {
              Home: focused ? 'home' : 'home-outline',
              AllApps: focused ? 'apps' : 'apps-outline',
              Gold: focused ? 'trophy' : 'trophy-outline',
              Game: focused ? 'game-controller' : 'game-controller-outline',
              Profile: focused ? 'person' : 'person-outline',
            };
            return <Ionicons name={map[route.name]} size={24} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="AllApps" component={AllAppsScreen} options={{ title: 'All Apps' }} />
        <Tab.Screen name="Gold" component={GoldScreen} />
        <Tab.Screen name="Game" component={GameScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}