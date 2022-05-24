/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *hthrthrthrthrthrthr

 
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
// import * as React from 'react';
import {Image} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import Icon from 'react-native-vector-icons/Feather';

import CustomSidebarMenu from './Components/CustomSidebar';
// import Books from './NcertStack/Books';
// import Select_chapters from './NcertStack/SelectChapter';
// import SamplePaper from './TabScreen/SamplePaperStack';
// import HelpSupport from './TabScreen/Help';
import SamplePaper from './TabScreen/SamplePaper';
import HelpSupport from './TabScreen/Helps';

import NCERTStack from './NcertStack/NcertStack';
import SideBookSolution from './SideBookSolutions/SideBook';
import AboutApp from './AboutApp';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomSidebarMenu {...props} />}
        useLegacyImplementation
        initialRouteName="Root"
        screenOptions={{
          drawerItemStyle: {marginLeft: 15, marginRight: 15},
          drawerLabelStyle: {fontWeight: 'bold'},
          drawerActiveTintColor: '#8481D0',
          headerStyle: {backgroundColor: '#8481D0'},
          headerTitleStyle: {color: 'white'},
          headerShown: false,
        }}>
        <Drawer.Screen name="Home" component={AnimTab1} />
        <Drawer.Screen name="About us" component={AboutApp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// import Check from './Components/check';
import Icon, {Icons} from './Components/Icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// import ChooseBooks from './NcertStack/ChooseBooks';

import Colors from './Components/Colors';
// import Colors from "./Components/"
import * as Animatable from 'react-native-animatable';

const TabArr = [
  {
    route: 'Ncert Books',
    label: 'Ncert Books',
    type: Icons.Feather,
    icon: 'book',
    component: NCERTStack,
  },

  {
    route: 'samplePapers',
    label: 'CBSE Sample paper',
    type: Icons.Ionicons,
    icon: 'document-outline',
    component: SamplePaper,
  },

  {
    route: 'HelpSupport',
    label: 'Help Support',
    type: Icons.Feather,
    icon: 'message-square',
    component: HelpSupport,
  },
];

const Tab = createBottomTabNavigator();

const animate1 = {
  0: {scale: 0.5, translateY: 7},
  0.92: {translateY: -34},
  1: {scale: 1.2, translateY: -24},
};
const animate2 = {
  0: {scale: 1.2, translateY: -24},
  1: {scale: 1, translateY: 7},
};

const circle1 = {
  0: {scale: 0},
  0.3: {scale: 0.9},
  0.5: {scale: 0.2},
  0.8: {scale: 0.7},
  1: {scale: 1},
};
const circle2 = {0: {scale: 1}, 1: {scale: 0}};

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({scale: 1});
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 0});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={300} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? Colors.white : Colors.primary}
          />
        </View>
        <Animatable.Text ref={textRef} style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

function AnimTab1() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 70,
    position: 'absolute',
    bottom: 10,
    right: 16,
    left: 16,
    borderRadius: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.primary,
  },
});
