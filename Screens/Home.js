import { View, Text, Image,StyleSheet, TouchableOpacity, Button} from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
        <View style={styles.logoWrapper}>
            <Image
            style={styles.logo}
            source={require('../assets/img/logo.png')}
            />
            <Text style={styles.logoText}>Daily Prayer</Text>

        </View>

        <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.buttons}
                onPress={() => navigation.navigate('MorningPrayerScreen')}
            >
                <Text style={styles.buttonText}>Morning Prayer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}
            onPress={() => navigation.navigate('MiddayPrayerScreen')}
            >
                <Text style={styles.buttonText}>Midday Prayer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}
                onPress={() => navigation.navigate('NightPrayerScreen')}
            >
                <Text style={styles.buttonText}>Night Prayer</Text>
            </TouchableOpacity>
        </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    // alignItems:'center'

    },
    logoText:{
        marginTop:5,
        fontWeight:'bold',
        fontSize:20

    },
    buttonWrapper:{
        marginHorizontal:15,
        flex:2
    },
    buttons:{
        marginVertical:15,
        backgroundColor:'#2cc28c',
        marginTop: 10,
        paddingTop: 30,
        paddingBottom: 30,
        borderRadius: 20,
    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:18
    },
    logo:{
        resizeMode:'cover',
        maxWidth:200,
        height:100,
        paddingHorizontal:'auto',
        marginTop:35
    },
    logoWrapper:{
        alignItems:'center',
        flex:1
    }
  });