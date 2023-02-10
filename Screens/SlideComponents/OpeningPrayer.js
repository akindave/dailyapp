import { View, Text,StyleSheet, FlatList } from 'react-native'
import React from 'react'


const Item = ({text,verse,scriptureStyle}) => (
    <View style={{marginTop:15}}>
      <Text style={scriptureStyle}>{text}</Text>
      <Text style={{marginLeft:30,color:'#fff',fontSize:17,marginTop:-30}}>{verse}</Text>
    </View>
  );

export default function OpeningPrayer(props) {
  return (
    <View>
      <Text style={props.titlestyles}>Opening Prayer</Text>
      {props.item.opening_prayer.title && (<Text style={props.subtitleStyle}>{props.item.opening_prayer.title}</Text>) }
      {props.item.opening_prayer.content && (<FlatList
        data={props.item.opening_prayer.content}
        renderItem={({item})=>
            <Item verse={item.verse} text={item.scripture} scriptureStyle={props.scriptureStyle}/>
        }
        keyExtractor={item => item.id}
      />)}
      <Text style={props.contentStyle}>{props.item.opening_prayer.prayers}</Text>
      {/* <Text>{props.item.subtitle}</Text> */}
    </View>
  )
}

