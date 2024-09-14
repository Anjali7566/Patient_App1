import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, Ionicons } from 'react-native-vector-icons';
import MainScreen from './MainScreen';
import Reports from './Reports';
import Carts from './Helps';
import Cart from './Cart';
import { StatusBar } from 'react-native';


const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 4,
    right: 0,
    left: 0,
    elevation: 0,
    backgroundColor: '#fff',
  },
};

const BottomNavigationBar = () => {
  return (
    <>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <MaterialIcons 
                name="home" 
                size={30} 
                color={focused ? '#4C97F3' : '#8E8E93'}
                 />
              ),
            }}
          />
          <Tab.Screen
            name="Reports"
            component={Reports}
            options={{
              tabBarIcon: ({ focused }) => (
                <MaterialIcons
                 name="list" 
                 size={30} 
                 color={focused ? '#4C97F3' : '#8E8E93'}
                  />
              ),
            }}
          />
          <Tab.Screen
            name="Carts"
            component={Carts}
            options={{
              tabBarIcon: ({ focused }) => (
                <MaterialIcons
                  name="call"
                  size={30}
                  color={focused ? '#4C97F3' : '#8E8E93'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarIcon: ({ focused }) => (
                <MaterialIcons 
                name="shopping-cart" 
                size={30} 
                color={focused ? '#4C97F3' : '#8E8E93'}
                 />
              ),
            }}
          />
        </Tab.Navigator>
    </>
  );
};

export default BottomNavigationBar;
