import 'react-native-gesture-handler'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Cart from './Cart';
import Favorite from './Favorite';
import Notification from './Notification';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PersonalDetails from './PersonalDetails';

const TabBottom = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomNavigation = () => {

    const renderIcon = (
        icon: String,
        props: {
            focused: Boolean;
            color: String;
            size: Number;
        },
    ) => (
        <Image
            source={icon} tintColor={props.color}
            height={24} width={24}/>
    );

    const ICON_MENU = {
        Home: require('./images/icons8-home-32.png'),
        Cart: require('./images/icons8-shopping-bag-32.png'),
        Favorite: require('./images/icons8-favorite-32.png'),
        Notification: require('./images/icons8-notification-32.png'),
    };

  return (
    

        <TabBottom.Navigator 
            
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor: '#0C0F14',
                tabBarInactiveBackgroundColor: '#0C0F14',
                tabBarActiveTintColor: '#D17842',
                
            }}>
            <TabBottom.Screen name='Home' component={Home} options={{
                tabBarIcon: props => renderIcon(ICON_MENU.Home, props),
                
            }}/>
            <TabBottom.Screen name='Cart' component={Cart} options={{
                tabBarIcon: props => renderIcon(ICON_MENU.Cart, props),
            }}/>
            <TabBottom.Screen name='Favorite' component={Favorite} options={{
                tabBarIcon: props => renderIcon(ICON_MENU.Favorite, props),
            }}/>
            <TabBottom.Screen name='Notification' component={Notification} options={{
                tabBarIcon: props => renderIcon(ICON_MENU.Notification, props),
            }}/>

        </TabBottom.Navigator>
    
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})