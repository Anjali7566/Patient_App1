import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, Ionicons } from 'react-native-vector-icons';
import { Image } from 'react-native';
import Reports from './Reports';
import Cart from './Cart';
import MainScreenNavigation from './MainScreenNavigation';
import Help from './Help';



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
            name="MainScreenNavigation"
            component={MainScreenNavigation}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                source={require('../assets/Vector (1).png')}
                resizeMode='contain'
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? '#4C97F3' : '#000000',
                }}
                 />
              ),
            }}
          />
          <Tab.Screen
            name="Reports"
            component={Reports}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                source={require('../assets/Union.png')}
                resizeMode='contain'
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? '#4C97F3' : '#000000',
                }}
                  />
              ),
            }}
          />
          <Tab.Screen
            name="Help"
            component={Help}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                source={require('../assets/Union (1).png')}
                resizeMode='contain'
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? '#4C97F3' : '#000000',
                }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                source={require('../assets/Vector (2).png')}
                resizeMode='contain'
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? '#4C97F3' : '#000000',
                }}
                 />
              ),
            }}
          />
        </Tab.Navigator>
    </>
  );
};

export default BottomNavigationBar;
