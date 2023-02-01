import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
  import { useFonts } from 'expo-font';
export default function CustomDrawer(props) {
    const [loaded] = useFonts({
        'AlegreyaSans-Medium': require('../assets/fonts/AlegreyaSans-Medium.ttf'),
      });

      if (!loaded) {
        return null;
      }
  return (
<View style={{flex:1,backgroundColor:'#3C3B3B'}}>
      <DrawerContentScrollView {...props}>
        <View style={{paddingTop:60}}>
            <TouchableOpacity style={{backgroundColor:'grey',padding:13}}>
                <Text style={{color:'#fff',fontSize:23,fontFamily:'AlegreyaSans-Medium'}}>Sunday 29,2022</Text>
            </TouchableOpacity>
        <DrawerItemList {...props} />
        <TouchableOpacity style={{backgroundColor:'grey',padding:8,marginTop:35}}>
            <Text style={{color:'#fff',fontSize:23,fontFamily:'AlegreyaSans-Medium'}}>Settings</Text>
        </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
      <View style={{padding:20,borderTopWidth:1,borderTopColor:'#fff'}}>
        <Text style={{color:'#fff'}}>Version 1.0</Text>
      </View>
    </View>
  )
}