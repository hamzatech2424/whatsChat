import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../Screens/AuthScreens/signInScreen';
import SignUpScreen from '../Screens/AuthScreens/signUpScreen';


const Stack = createNativeStackNavigator();


const AuthStack = () => {


  return (
      <Stack.Navigator
      initialRouteName='signIn'
      screenOptions={{ headerShown: false }}>


        <Stack.Screen  name="signIn" component={SignInScreen}
          options={{ headerShown: false, gestureEnabled: true, animation: 'slide_from_right', }}
        />

        <Stack.Screen name="signUp" component={SignUpScreen}
          options={{ headerShown: false, gestureEnabled: true, animation: 'slide_from_right', }}
        />


      </Stack.Navigator>
  )
}

export default AuthStack

