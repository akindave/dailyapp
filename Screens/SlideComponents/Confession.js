import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

export default function Confession(props) {
    const [loaded] = useFonts({
        'OpenSans-ExtraBold': require('../../assets/fonts/OpenSans-ExtraBold.ttf'),
        'OpenSans-BoldItalic': require('../../assets/fonts/OpenSans-BoldItalic.ttf'),
        'OpenSans-Medium': require('../../assets/fonts/OpenSans-Medium.ttf'),
      });

      if (!loaded) {
        return null;
      }
  return (
    <View>
      <Text style={styles.title}>Confession</Text>
      <Text style={styles.content}>{props.item.confession.content[0].confession}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    content:{
        fontFamily:'OpenSans-Medium',
        fontSize:16,
        color:'#fff',
        marginTop:15,
        // lineHeight: 26
      },
      title:{color:'#fff',fontSize:50,fontFamily:'OpenSans-ExtraBold'}
})