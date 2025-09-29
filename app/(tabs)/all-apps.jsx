import FourGridIcon from '@/components/icons/FourGridIcon';
import { IconSymbol } from '@/components/ui/icon-symbol';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import allAppsData from '../../data/allApps.json';

// Centralized icon registry – PNGs by app name (present files under assets/images)
const appPngRegistry = {
  'Approve Now': require('../../assets/images/approve_now.png'),
  'Discipline': require('../../assets/images/discipline.png'),
  'Learning': require('../../assets/images/learning.png'),
  'FPT Care': require('../../assets/images/fpt_care.png'),
  'Events': require('../../assets/images/event.png'),
  'FPT Dating': require('../../assets/images/dating.png'),
  'Birthday': require('../../assets/images/birthday.png'),
  'Employee Info': require('../../assets/images/employee_info.png'),
  'News': require('../../assets/images/news.png'),
  'Reward': require('../../assets/images/reward.png'),
  'Survey': require('../../assets/images/survey.png'),
  'Star Ave': require('../../assets/images/star_ave.png'),
  'Game': require('../../assets/images/game.png'),
  'My Tasks': require('../../assets/images/my_task.png'),
  'Payslip': require('../../assets/images/payslip.png'),
};

export default function AllAppsScreen() {
  const [searchTerm, setSearchTerm] = useState('');

  const { workApps, utilityApps, newsApps, wikiApps, gameApps, statusBar } = allAppsData;

  const allApps = [...workApps, ...utilityApps, ...newsApps, ...wikiApps, ...gameApps];
  
  const filteredApps = allApps.filter(app =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const workFilteredApps = filteredApps.filter(app => workApps.includes(app));
  const utilityFilteredApps = filteredApps.filter(app => utilityApps.includes(app));
  const newsFilteredApps = filteredApps.filter(app => newsApps.includes(app));
  const wikiFilteredApps = filteredApps.filter(app => wikiApps.includes(app));
  const gameFilteredApps = filteredApps.filter(app => gameApps.includes(app));

  const AppCard = ({ app }) => {
    const pngSource = appPngRegistry[app.name];
    const bgColor = app.iconBg || '#E9F1FF';
    return (
      <TouchableOpacity style={styles.appCard}>
        <View style={[styles.appIcon, { backgroundColor: bgColor }]}>
          {pngSource ? (
            <Image source={pngSource} style={styles.appPng} resizeMode="contain" />
          ) : app.icon ? (
            <Text style={styles.appIconText}>{app.icon}</Text>
          ) : null}
        </View>
        <View style={styles.appInfo}>
          <Text style={styles.appName}>{app.name}</Text>
          <Text style={styles.appDescription}>{app.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

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

      {/* Sticky Search Header */}
      <View style={styles.stickyHeader}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <IconSymbol name="magnifyingglass" size={16} color="#B5B7BC" />
            <TextInput
              style={styles.searchInput}
              placeholder="Type feature's name"
              placeholderTextColor="#B5B7BC"
              value={searchTerm}
              onChangeText={setSearchTerm}
            />
            {searchTerm ? (
              <TouchableOpacity onPress={() => setSearchTerm('')}>
                <IconSymbol name="xmark.circle.fill" size={16} color="#B5B7BC" />
              </TouchableOpacity>
            ) : null}
          </View>
          <FourGridIcon size={20} color="#B5B7BC" />
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageTitle}>All Apps</Text>
        {/* WORK Section */}
        {workFilteredApps.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>WORK</Text>
            </View>
            {workFilteredApps.map((app, index) => (
              <View key={app.id}>
                <AppCard app={app} />
                {index < workFilteredApps.length - 1 && <View style={styles.itemSeparator} />}
              </View>
            ))}
          </View>
        )}

        {/* UTILITIES Section */}
        {utilityFilteredApps.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>UTILITIES</Text>
            </View>
            {utilityFilteredApps.map((app, index) => (
              <View key={app.id}>
                <AppCard app={app} />
                {index < utilityFilteredApps.length - 1 && <View style={styles.itemSeparator} />}
              </View>
            ))}
          </View>
        )}

        {/* NEWS Section */}
        {newsFilteredApps.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>NEWS</Text>
            </View>
            {newsFilteredApps.map((app, index) => (
              <View key={app.id}>
                <AppCard app={app} />
                {index < newsFilteredApps.length - 1 && <View style={styles.itemSeparator} />}
              </View>
            ))}
          </View>
        )}

        {/* WIKI Section */}
        {wikiFilteredApps.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>WIKI</Text>
            </View>
            {wikiFilteredApps.map((app, index) => (
              <View key={app.id}>
                <AppCard app={app} />
                {index < wikiFilteredApps.length - 1 && <View style={styles.itemSeparator} />}
              </View>
            ))}
          </View>
        )}

        {/* GAME Section */}
        {gameFilteredApps.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>GAME</Text>
            </View>
            {gameFilteredApps.map((app, index) => (
              <View key={app.id}>
                <AppCard app={app} />
                {index < gameFilteredApps.length - 1 && <View style={styles.itemSeparator} />}
              </View>
            ))}
          </View>
        )}

        {/* No Results */}
        {filteredApps.length === 0 && searchTerm ? (
          <View style={styles.noResults}>
            <Text style={styles.noResultsText}>No apps found matching "{searchTerm}"</Text>
          </View>
        ) : null}
      </ScrollView>

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
  stickyHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#111827',
  },
  
  pageTitle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  section: {
    marginBottom: 4,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#666',
    marginBottom: 4,
  },
  sectionHeader: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 4,
    paddingHorizontal: 16,
    marginHorizontal: -16,
    marginBottom: 0,
  },
  itemSeparator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 1,
    marginHorizontal: 16,
  },
  sectionSeparator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginTop: 12,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  appCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    borderRadius: 0,
    padding: 6,
    marginBottom: 0,
    marginHorizontal: -16,
  },
  appIcon: {
    width: 48,
    height: 48,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  appIconText: {
    fontSize: 24,
  },
  appPng: {
    width: 40,
    height: 40,
  },
  appInfo: {
    flex: 1,
  },
  appName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  appDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  noResults: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  noResultsText: {
    color: '#666',
    fontSize: 16,
  },
});
