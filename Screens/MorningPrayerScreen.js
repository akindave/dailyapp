import { View, Text,StyleSheet,Image, ImageBackground,Dimensions, ScrollView,TouchableOpacity } from 'react-native'
import React, { useRef, useState,useEffect } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Carousel, {Pagination} from 'react-native-new-snap-carousel';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
// this are the externall component
import IntroPage from './SlideComponents/IntroPage';
import OpeningPrayer from './SlideComponents/OpeningPrayer';
import Confession from './SlideComponents/Confession';
import Scripture from './SlideComponents/Scripture';
import ClosingPrayer from './SlideComponents/ClosingPrayer';
import LordPrayer from './SlideComponents/LordPrayer';


const morningPrayerImage = require('../assets/img/pathway.jpg');

// const [backId,setBackId] = useState(0);
// const data = [
//   {
//     id:1,
//     name:'Slider 4',
//     image: morningPrayerImage
//   },
//   {
//     id:2,
//     title:'Opening Prayer',
//     subtitle:'The land of Mercy',
//     content:"Lord, thank you for your abundant, abounding grace. Thank you that we don't have to earn a drop of the mighty river of grace that flows freely for us today. Thank you for the unexpected, unmerited favor you've showered on my life. Help me put myself in the path of your love and grace. Help me not neglect the disciplines I need to meet with you regularly and to drink from the water of life. Thank you for your rich love. Amen.God, grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference. Living one day at a time, enjoying one moment at a time",
//     scripture:[
//       {
//         id:1,
//         title:"Isaiah 60:1",
//         content:"Arise and shine for for your light has come and the glory of God has rising over you"
//       },
//       {
//         id:2,
//         title:"John 1:1",
//         content:"In the beginning was the word and the word was with God and God became the word"
//       },

//     ]

//   },
//   {
//     id:3,
//     title:'Confession',
//     content:"Heavenly Father, thank you for access to boldly enter into Your presence through the blood of our Lord Jesus Christ. We thank You for the 2023 Faith Refresher to recover all in Jesus Name Lord, we pray that every attendee, onsite and virtual, receives the miracle-working ability of the Holy Ghost to dominate as the righteousness of God is revealed from faith to faith. Through the blood of the eternal covenant, Lord, draw every kindred, tongue, people and nation from the uttermost parts of the world to every service. "
//   },
//   {
//     id:4,
//     title:'Scripture',
//     scripture: [
//       {
//         text:"Genesis 28"
//       },
//       {
//         text:"Isaiah 15"
//       }
//     ]
//   },


// ];
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function MorningPrayerScreen({navigation}) {



  const isCarousel = useRef(null);
  const [index,setIndex] = useState(0);

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const renderItem = ({item})=>{
    return(
      <View >

        {
           item.first ? <IntroPage item={item} title="Morning"/> : '' }
        {
          item.opening_prayer ?  <OpeningPrayer item={item} titlestyles={styles.title}
          subtitleStyle={styles.subtitle} scriptureStyle={styles.scriptures} contentStyle={styles.content}/> : ''
        }
        {
          item.confession ? <Confession item={item}/> : ''
        }
        {
          item.scripture ? <Scripture item={item}/> : ''
        }

        {
          item.lords_prayer ? <LordPrayer item={item}/> : ''
        }

        {
          item.closing_prayer ? <ClosingPrayer item={item}/> : ''
        }

        {/* <Text style={styles.title}>{item.name}</Text> */}

      </View>
    )
  }

  const fetchData = async () => {
    try {
    const resp = await fetch("https://daotechnology.onrender.com/api/v1/get/all/morning/prayer/morning_prayer");
    const data = await resp.json();
    const arr = data.data;
    data.data.unshift({"first":"banner"});
    // console.log(data.data);
    setData(data.data);
    setLoading(false);
  } catch (error) {
    // console.error(error);
  }
  };

  useEffect(() => {
    fetchData();
  }, []);



  const [loaded] = useFonts({
    'AlegreyaSans-ExtraBold': require('../assets/fonts/AlegreyaSans-ExtraBold.ttf'),
    'AlegreyaSans-BoldItalic': require('../assets/fonts/AlegreyaSans-BoldItalic.ttf'),
    'AlegreyaSans-Light': require('../assets/fonts/AlegreyaSans-Light.ttf'),
  });

  if (!loaded) {
    return null;
  }



  return (
    <SafeAreaView style={{flex:1}}>
    <ImageBackground source={morningPrayerImage} blurRadius={index == '0' ? 0 : 1} resizeMode="cover" style={[styles.image]}>

    {data &&
      (<View  style={[styles.container,{backgroundColor: index=='0' ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.5)'}]}>
        <ScrollView>
        <View style={{marginTop:150,flex:1}}>

        <Carousel
                    layout={"default"}
                    ref={isCarousel}
                    data={data}
                    sliderWidth={windowWidth}
                    itemWidth={windowWidth-35}
                    renderItem={renderItem}
                    onSnapToItem = { index => setIndex(index) } />

        </View>
        </ScrollView>
        <View style={styles.dotWrapper}>
        <Pagination
                    dotsLength={data.length}
                    activeDotIndex={index}
                    dotStyle={{
                      width:10,
                      height:10,
                      borderRadius:10,
                      marginHorizontal:8,
                      backgroundColor:'white'
                    }}
                    containerStyle={{
                      // flexDirection: 'row-reverse',
                      // flexWrap: 'wrap',
                      marginBottom:-55

                    }}
                    />

                    <View style={styles.iconDrawer} >

                      <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
                        <Ionicons name="menu" size={32} color="white" />
                      </TouchableOpacity>
                    </View>
        </View>
      </View>
      ) }
    </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    position:'relative',
    // backgroundColor: index == 1 ? '' : 'rgba(0,0,0,0.5)'
    // backgroundColor: 'rgba(0,0,0,0.5)',

  },
  renderWrapper:{

  },
  dotWrapper:{
    // flex: 1,
    // flexDirection:'column',
    justifyContent: 'flex-end',
    // marginBottom: -10
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  iconDrawer:{
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    marginBottom:15,
    marginLeft:10
  },
  image: {
    flex: 1,
    // opacity:0.6,
    // backgroundColor:'black',

  },
  subtitle:{
    borderTopWidth:2,
    borderBottomWidth:2,
    borderColor:'#fff',
    paddingTop:5,
    paddingBottom:5,
    color:"#fff",
    fontSize:20,
    // alignItems:'center'

},
scriptures:{
  fontFamily:'AlegreyaSans-BoldItalic',
  fontSize:20,
  color:'#fff',
  lineHeight:26,
  // fontWeight:'bold',
  // flexShrink:1,
  // flexWrap: 'wrap',
  // flex:1
},
content:{
  fontFamily:'AlegreyaSans-Light',
  fontSize:22,
  color:'#fff',
  marginTop:15,
  lineHeight: 25
},

  title:{color:'#fff',fontSize:50,fontFamily:'AlegreyaSans-ExtraBold',marginBottom:15}
})