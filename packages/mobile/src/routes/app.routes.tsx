import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import {
  Home as HomeIcon,
  Car as CarIcon,
  User as UserIcon,
} from '../assets/icons';
import { TAB_BAR_HEIGHT } from '../constants';
import { TabBarIcon } from '../components/atoms';
import { Home } from '../pages/Home';
import { Car } from '../pages/Car';
import { Profile } from '../pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TempView = ({ children }: { children: ReactNode }) => (
  <View>
    <Text>{children}</Text>
  </View>
);

const HomeStack = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: theme.colors.white },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Car" component={Car} />
    </Stack.Navigator>
  );
};

export const AppRoutes = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        inactiveTintColor: theme.colors['gray.300'],
        activeTintColor: theme.colors.primary,
        style: {
          height: TAB_BAR_HEIGHT,
          backgroundColor: theme.colors['gray.50'],
          borderTopColor: theme.colors['gray.200'],
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={HomeIcon} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Filter"
        component={TempView}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={CarIcon} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={UserIcon} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
