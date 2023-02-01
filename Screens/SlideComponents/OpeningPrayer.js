import { View, Text,StyleSheet, FlatList } from 'react-native'
import React from 'react'


const Item = ({text,verse,scriptureStyle}) => (
    <View style={{marginTop:15}}>
      <Text style={scriptureStyle}>{text}</Text>
      <Text style={{marginLeft:30,color:'#fff',fontSize:17}}>{verse}</Text>
    </View>
  );

export default function OpeningPrayer(props) {
  return (
    <View>
      <Text style={props.titlestyles}>{props.item.title}</Text>
      <Text style={props.subtitleStyle}>{props.item.subtitle}</Text>
      <FlatList
        data={props.item.scripture}
        renderItem={({item})=>
            <Item verse={item.title} text={item.content} scriptureStyle={props.scriptureStyle}/>
        }
        keyExtractor={item => item.id}
      />
      <Text style={props.contentStyle}>{props.item.content}</Text>
      {/* <Text>{props.item.subtitle}</Text> */}
    </View>
  )
}

