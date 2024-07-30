/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import Welcome from './assets/Welcome';
import Login from './assets/Login';
import Register from './assets/Register';
import PersonalDetails from './assets/PersonalDetails';
import Home from './assets/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './assets/BottomNavigation';
import CoffeeDetails from './assets/CoffeeDetails';
import FlatView from './assets/FlatView';
import Setting from './assets/Setting';
import FlatList_SP from './assets/FlatList_SP';
import AppContext from './assets/AppContext';
import Cart from './assets/Cart';


const Stack = createNativeStackNavigator();
const TabBottom = createBottomTabNavigator();

function App(): React.JSX.Element {

  return (
    
    <AppContext>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Welcome'>
          <Stack.Screen name='Welcome' component={Welcome}/>
          <Stack.Screen name='Register' component={Register}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Setting' component={Setting}/>
          <Stack.Screen name='PersonalDetails' component={PersonalDetails}/>
          <Stack.Screen name='bottom' component={BottomNavigation}/>
          <Stack.Screen name='FlatList' component={FlatList_SP}/>
          <Stack.Screen name='CoffeeDetails' component={CoffeeDetails}/>
      </Stack.Navigator>

    </NavigationContainer>
  </AppContext>

    
  );
}


export default App;
