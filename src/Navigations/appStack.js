import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/AppScreens/homeScreen';
import ChatScreen from '../Screens/AppScreens/chatScreen';
import CallScreen from '../Screens/AppScreens/callScreen';
import TodoFirestore from '../Screens/AppScreens/todoFirestore';
import SearchScreen from '../Screens/AppScreens/searchScreen';


const Stack = createNativeStackNavigator();


const AppStack = () => {

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Search" component={SearchScreen}
        options={{ headerShown: false, gestureEnabled: true, animation: 'slide_from_right', }}
      />

      <Stack.Screen name="Todo" component={TodoFirestore}
        options={{ headerShown: false, gestureEnabled: true, animation: 'slide_from_right', }}
      />

      <Stack.Screen name="Home" component={HomeScreen}
        options={{ headerShown: false, gestureEnabled: true, animation: 'slide_from_right', }}
      />

      <Stack.Screen name="Chat" component={ChatScreen}
        options={{ headerShown: false, gestureEnabled: true, animation: 'slide_from_right', }}
      />


      <Stack.Screen name="Call" component={CallScreen}
        options={{ headerShown: false, gestureEnabled: true, animation: 'slide_from_bottom', }}
      />


    </Stack.Navigator>
  )
}

export default AppStack

