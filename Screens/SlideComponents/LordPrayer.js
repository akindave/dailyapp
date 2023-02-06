import { View, Text,StyleSheet ,FlatList} from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const Item = ({text,verse}) => (
    <View style={{marginTop:15}}>
      <Text style={styles.lordsprayerCon}>{text}</Text>
      <Text style={{marginLeft:30,color:'#fff',fontSize:17,marginTop:3}}>{verse}</Text>
    </View>
  );


export default function LordPrayer(props) {
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
    <Text style={styles.title}>The Lord's Prayer</Text>
    <FlatList
        data={props.item.lords_prayer.lords_prayer}
        renderItem={({item})=>
            <Item verse={item.explainer} text={item.lords_prayer} />
        }
        keyExtractor={item => item.id}
      />
    {/* <Text style={styles.content}>{props.item.lords_prayer.lords_prayer[0].lords_prayer}</Text> */}
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
      title:{color:'#fff',fontSize:40,fontFamily:'OpenSans-ExtraBold'},
      lordsprayerCon:{
        fontFamily:'OpenSans-BoldItalic',
        fontSize:20,
        color:'#fff',
        // lineHeight:26,
        // fontWeight:'bold',
        // flexShrink:1,
        // flexWrap: 'wrap',
        // flex:1
      },
})