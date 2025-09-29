import AdminIcon from '@/components/icons/AdminIcon';
import FaqIcon from '@/components/icons/FaqIcon';
import LogoutIcon from '@/components/icons/LogoutIcon';
import ProfileMyIcon from '@/components/icons/ProfileMyIcon';
import SettingsIcon from '@/components/icons/SettingsIcon';
import SupportIcon from '@/components/icons/SupportIcon';
import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import profileData from '../../data/profile.json';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const { menuItems, user, app, statusBar } = profileData;

  const handleMenuClick = (item) => {
    console.log(`Clicked on ${item.name}`);
    // Add navigation logic here
  };

  const renderLeadingIcon = (key) => {
    switch (key) {
      case 'My Profile':
        return <ProfileMyIcon size={24} />;
      case 'Settings':
        return <SettingsIcon size={20} />;
      case 'Support':
        return <SupportIcon size={24} />;
      case 'FAQ':
        return <FaqIcon size={20} />;
      case 'Admin':
        return <AdminIcon size={20} />;
      case 'Logout':
        return <LogoutIcon size={20} />;
      default:
        return <IconSymbol name={item.icon} size={20} color="#4285F4" />;
    }
  };

  const MenuItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.menuItem}
      onPress={() => handleMenuClick(item)}
    >
      <View style={styles.menuIconContainer}>
        {renderLeadingIcon(item.name)}
      </View>
      <View style={styles.menuContent}>
        <Text style={styles.menuName}>{item.name}</Text>
      </View>
      <IconSymbol name="chevron.right" size={16} color="#666" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
       {/* Status Bar */}
       <View style={styles.statusBar}>
         <View style={styles.statusLeft}>
           <View style={styles.timeIndicator}>
             <Text style={styles.timeText}>{statusBar.time}</Text>
           </View>
         </View>
         <View style={styles.statusRight}>
           <Text style={styles.signalText}>{statusBar.signal}</Text>
           <Text style={styles.batteryText}>{statusBar.battery}</Text>
         </View>
       </View>

      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={styles.headerBanner}
          resizeMode="cover"
        />
        
        <View style={styles.profileSection}>
          <View style={styles.profilePictureContainer}>
             <View style={styles.profilePicture}>
               <Text style={styles.profileInitial}>{user.initial}</Text>
             </View>
            <View style={styles.cameraIcon}>
              <IconSymbol name="camera.fill" size={14} color="#FFFFFF" />
            </View>
          </View>
          
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>{user.name} ({user.id})</Text>
            <Text style={styles.userDepartment}>({user.department})</Text>
          </View>
        </View>
      </View>

      {/* Menu List */}
      <ScrollView
        style={styles.menuSection}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        bounces={false}
        overScrollMode="never"
        contentContainerStyle={[styles.menuContentContainer, { paddingBottom: insets.bottom + 160 }]}
      >
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
        <View style={{ height: insets.bottom + 16 }} />
      </ScrollView>

       {/* App Info */}
       <View style={styles.appInfoSection}>
         <Text style={styles.appVersion}>{app.name} Version {app.version}</Text>
         <Text style={styles.appCopyright}>{app.copyright}</Text>
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
  },
  statusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeIndicator: {
    backgroundColor: '#ff0000',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  timeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  statusRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  signalText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
  },
  batteryText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
  },
  profileHeader: {
    position: 'relative',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  headerBanner: {
    height: 104,
    width: '100%',
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginTop: 4,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: -36,
    paddingHorizontal: 12,
  },
  profilePictureContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  profileInitial: {
    fontSize: 26,
    fontWeight: '700',
    color: '#4285F4',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#6B6F75',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1.6,
    elevation: 2,
  },
  profileInfo: {
    alignItems: 'center',
    position: 'relative',
    marginTop: 6,
  },
  userName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2d2d2d',
    marginBottom: 2,
  },
  userDepartment: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: 2,
  },
  profileHighlight: {
  },
  menuSection: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 4,
  },
  menuContentContainer: {
    paddingBottom: 32,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIconContainer: {
    width: 24,
    alignItems: 'center',
    marginRight: 12,
  },
  menuContent: {
    flex: 1,
  },
  menuName: {
    fontSize: 13,
    color: '#333',
    fontWeight: '500',
  },
  appInfoSection: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  appVersion: {
    fontSize: 11,
    color: '#666',
    marginBottom: 2,
  },
  appCopyright: {
    fontSize: 11,
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 8,
    paddingBottom: 20,
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  navItemActive: {
    // Active state styling handled by icon and text colors
  },
  navLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666',
    marginTop: 4,
  },
  navLabelActive: {
    color: '#4285F4',
  },
});
