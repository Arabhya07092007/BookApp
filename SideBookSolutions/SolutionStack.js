import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SideBookSolution from './SideBook';
import Select_chapters from './SelectChapter';
import PDF_Screen from './PdfScreen';
import MyTabs from './TopNav/Topnav';

const Stack = createStackNavigator();

export default function SolutionStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Solutions" component={SideBookSolution} />
      <Stack.Screen name="SelectChapter" component={Select_chapters} />
      <Stack.Screen name="PDFScreen" component={PDF_Screen} />
    </Stack.Navigator>
  );
}
