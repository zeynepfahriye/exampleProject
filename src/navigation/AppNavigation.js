import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Address from '../screens/Address';
import Deliveries from '../screens/Deliveries'
import Delivery from '../screens/Delivery';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
    
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{headerShown:false}}
         initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Address" component={Address}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Deliveries" component={Deliveries}/>
        <Stack.Screen name="Delivery" component={Delivery}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation