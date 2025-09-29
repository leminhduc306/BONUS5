import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';

// Custom tab icons
import AllAppsActiveIcon from './components/icons/AllAppsActiveIcon';
import AllAppsIcon from './components/icons/AllAppsIcon';
import GameActiveIcon from './components/icons/GameActiveIcon';
import GameIcon from './components/icons/GameIcon';
import GoldActiveIcon from './components/icons/GoldActiveIcon';
import GoldIcon from './components/icons/GoldIcon';
import HomeActiveIcon from './components/icons/HomeActiveIcon';
import HomeIcon from './components/icons/HomeIcon';
import ProfileActiveIcon from './components/icons/ProfileActiveIcon';
import ProfileIcon from './components/icons/ProfileIcon';

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
          tabBarIcon: ({ focused, color }) => {
            switch (route.name) {
              case 'Home':
                return focused ? <HomeActiveIcon size={28} /> : <HomeIcon size={22} color={'#8b8b8b'} opacity={1} />;
              case 'AllApps':
                return focused ? <AllAppsActiveIcon size={28} /> : <AllAppsIcon size={20} color={'#8b8b8b'} opacity={1} />;
              case 'Gold':
                return focused ? <GoldActiveIcon size={28} /> : <GoldIcon size={22} />;
              case 'Game':
                return focused ? <GameActiveIcon size={28} /> : <GameIcon size={24} color={'#8b8b8b'} opacity={1} />;
              case 'Profile':
                return focused ? <ProfileActiveIcon size={28} /> : <ProfileIcon size={20} color={'#8b8b8b'} opacity={1} />;
              default:
                return <Ionicons name={focused ? 'ellipse' : 'ellipse-outline'} size={22} color={color} />;
            }
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