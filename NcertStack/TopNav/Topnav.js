import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import MathsCB from './MathsCB';
import ScienceCB from './ScienceCB';
import SocialCB from './SocialCB';
import SanskritCB from './SanskritCB';
import HindiCB from './HindiCB';
import EnglishCB from './EnglishCB';
import PhysicalCB from './PhysicalCB';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {fontSize: 13, fontWeight: '700'},
        tabBarStyle: {backgroundColor: '#8481D0'},
        tabBarItemStyle: {width: 90},
        tabBarScrollEnabled: true,
        backBehavior: 'firstRoute',
        // tabBarShowIcon:false
        // tabBarIcon: { color: "red" },
        // tabBarIndicatorStyle:{color:"red"}
      }}>
      <Tab.Screen
        name="Maths"
        component={MathsCB}
        options={{tabBarLabel: 'Maths'}}
      />
      <Tab.Screen
        name="Science"
        component={ScienceCB}
        options={{tabBarLabel: 'Science'}}
      />
      <Tab.Screen
        name="Social"
        component={SocialCB}
        options={{tabBarLabel: 'Social'}}
      />
      <Tab.Screen
        name="Sanskrit"
        component={SanskritCB}
        options={{tabBarLabel: 'Sanskrit'}}
      />
      <Tab.Screen
        name="Hindi"
        component={HindiCB}
        options={{tabBarLabel: 'Hindi'}}
      />
      <Tab.Screen
        name="English"
        component={EnglishCB}
        options={{tabBarLabel: 'English'}}
      />
      <Tab.Screen
        name="Physical"
        component={PhysicalCB}
        options={{tabBarLabel: 'Physical'}}
      />
    </Tab.Navigator>
  );
}
