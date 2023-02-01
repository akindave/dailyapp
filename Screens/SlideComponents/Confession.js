import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

export default function Confession(props) {
    const [loaded] = useFonts({
        'AlegreyaSans-ExtraBold': require('../../assets/fonts/AlegreyaSans-ExtraBold.ttf'),
        'AlegreyaSans-BoldItalic': require('../../assets/fonts/AlegreyaSans-BoldItalic.ttf'),
        'AlegreyaSans-Light': require('../../assets/fonts/AlegreyaSans-Light.ttf'),
      });

      if (!loaded) {
        return null;
      }
  return (
    <View>
      <Text style={styles.title}>{props.item.title}</Text>
      <Text style={styles.content}>{props.item.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    content:{
        fontFamily:'AlegreyaSans-Light',
        fontSize:23,
        color:'#fff',
        marginTop:15,
        // lineHeight: 26
      },
      title:{color:'#fff',fontSize:50,fontFamily:'AlegreyaSans-ExtraBold'}
})