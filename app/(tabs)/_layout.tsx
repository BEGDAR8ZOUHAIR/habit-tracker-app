import { Tabs } from 'expo-router';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faHouse, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 90,
          borderTopWidth: 1,
        },
        tabBarLabelStyle: { fontSize: 14, marginTop: 5 },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerStyle: { backgroundColor: 'red' },
          tabBarIcon: ({ color, focused }) => (
            <FontAwesomeIcon icon={faHouse as IconDefinition} color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: 'Progress',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesomeIcon icon={faChartSimple as IconDefinition} color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesomeIcon icon={faCog as IconDefinition} color={color} size={30} />
          ),
        }}
      />

    </Tabs>
  );
}
