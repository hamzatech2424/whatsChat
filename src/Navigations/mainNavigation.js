import React, { createRef, useEffect, useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './authStack';
import AppStack from './appStack';
import auth from '@react-native-firebase/auth';
import Colors from '../Theme'
import { useDispatch } from 'react-redux'
import { logedInData } from '../../src/Redux/Action'


const Stack = createNativeStackNavigator();

export const navigationRef = createRef()

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);

}


export function clearAndNavigate(name, params) {
    navigationRef.current?.reset({
      index: 0,
      routes: [{ name }],
      params: params,
    });
}

export function goBack() {
  navigationRef.current?.goBack();
}



const MainNavigation = () => {

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const dispatch = useDispatch()


  useEffect(() => {
    const unsubscriber = auth().onAuthStateChanged((data) => {
      setUser(data);
      if(data){
        dispatch(logedInData(data))
        // navigate("appStack")
      }
      if (initializing) setInitializing(false);
    })
    return () => {
      unsubscriber();
    }; 
  }, []);


  if (initializing) return (
    <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar barStyle='dark-content' translucent={true} backgroundColor={'transparent'} />
      <ActivityIndicator color={Colors.greenPrimary} size={40} />
    </View>
  )

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

          {/* <Stack.Screen name="authStack" component={AuthStack}
            options={{ headerShown: false, gestureEnabled: true, animation: 'slide_from_bottom', }}
          /> */}
          
          <Stack.Screen name="appStack" component={AppStack}
            options={{ headerShown: false, gestureEnabled: true, animation: 'slide_from_right', }}
          />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})
