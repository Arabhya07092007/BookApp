import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Books from './Books';
import Select_chapters from './SelectChapter';
import PDF_Screen from './PdfScreen';
import MyTabs from './TopNav/Topnav';
import ChooseBooks from './ChooseBooks';
import CustomScreen from '../CustomScreen';

const Stack = createStackNavigator();

export default function NCERTStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Books" component={CustomScreen} />
      <Stack.Screen name="ChooseBooks" component={ChooseBooks} />
      <Stack.Screen name="SelectChapter" component={Select_chapters} />
      <Stack.Screen name="PDFScreen" component={PDF_Screen} />
    </Stack.Navigator>
  );
}
