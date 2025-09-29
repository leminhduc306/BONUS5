import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProfileScreen from './app/(tabs)/profile.jsx';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <ProfileScreen />
    </SafeAreaProvider>
  );
}


