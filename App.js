import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import React, { useRef, useState,useEffect } from 'react'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
  SafeAreaView
} from 'react-native-safe-area-context';
// for bottom navigations
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

// import Home from './Screens/Home';
import MorningPrayerScreen from './Screens/MorningPrayerScreen';
import MiddayPrayerScreen from './Screens/MiddayPrayerScreen';
import NightPrayerScreen from './Screens/NightPrayerScreen';
import CustomDrawer from './Screens/CustomDrawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UseGetAllMorningPrayer } from './Screens/hooks/getAllMorningPrayer';


const queryClient = new QueryClient();
const Drawer = createDrawerNavigator();


export default function App() {
  // const {data,isLoading} = UseGetAllMorningPrayer();
  // const [appIsReady, setAppIsReady] = useState(false);
  const [loaded] = useFonts({
    'AlegreyaSans-Medium': require('./assets/fonts/AlegreyaSans-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }


  return (
    <SafeAreaProvider >
      <QueryClientProvider client={queryClient}>
        <NavigationContainer >
          <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} screenOptions=
          {{headerShown:false,
            // drawerActiveBackgroundColor:'grey',

            drawerActiveTintColor:'#fff',
            drawerInactiveTintColor:'#fff',
            drawerLabelStyle:{marginLeft:-25,color:'#fff',fontSize:15,fontFamily:'AlegreyaSans-Medium'}}}>

            <Drawer.Screen name="MorningPrayerScreen"
            component={MorningPrayerScreen}
            options={{ drawerLabel: 'Morning Prayer', drawerIcon:({color})=>(
              <Ionicons name="sunny" size={25} color={color} />
      ) }}

            />
            <Drawer.Screen name="MiddayPrayerScreen" component={MiddayPrayerScreen}
            options={{ drawerLabel: 'Midday Prayer',drawerIcon:({color})=>(
              <Ionicons name="partly-sunny-outline" size={25} color={color} />
      ) }}/>
            <Drawer.Screen name="NightPrayerScreen" component={NightPrayerScreen}
            options={{ drawerLabel: 'Night Prayer',drawerIcon:({color})=>(
              <Ionicons name="moon" size={25} color={color} />
      ) }}/>
          </Drawer.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
      </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
