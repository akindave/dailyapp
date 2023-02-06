import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

export default function IntroPage(props) {
    const datedis = new Date();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const [loaded] = useFonts({
        'AlegreyaSans-Bold': require('../../assets/fonts/AlegreyaSans-Bold.ttf'),
      });

      if (!loaded) {
        return null;
      }
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}><Text style={styles.prayer_underline}>Pra</Text>y<Text style={styles.prayer_underline}>er</Text></Text>
      </View>
      <Text style={styles.daytext}>{days[datedis.getDay()]+", "+months[datedis.getMonth()]+" "+datedis.getDate()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    prayer_underline:{
        textDecorationLine:'underline',
        textDecorationStyle:'double'
        // borderLeftWidth:50

    },
    title:{
        color:'#fff',
        fontSize:75,
        fontFamily:'AlegreyaSans-Bold',

    },
    titleWrapper:{
        marginTop:-39
    },
    daytext:{
        marginTop:23,
        color:'#fff',
        fontSize:20
    }
});