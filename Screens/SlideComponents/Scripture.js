import { View, Text,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';

const Item = ({text}) => (
    <View style={{marginTop:15,flexDirection:'row',backgroundColor:'grey',padding:8}}>
    <Text><Ionicons name="book-outline" size={25} color='white' /></Text>
      <Text style={{marginLeft:10,color:'#fff',fontSize:20}}>{text}</Text>
      {/* <Text style={{marginLeft:30,color:'#fff',fontSize:17}}>{verse}</Text> */}
    </View>
  );


export default function Scripture(props) {
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
        <Text style={styles.title}>Scripture</Text>
      <View>
      <FlatList
        data={props.item.scripture.scripture}
        renderItem={({item})=>
            <Item text={item.scripture_verse}/>
        }
        // keyExtractor={item => item.id}
      />
      </View>
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