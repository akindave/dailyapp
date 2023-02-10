import { View, Text,StyleSheet,FlatList,Modal,Pressable,ScrollView} from 'react-native'
import React,{useRef,useMemo,useState} from 'react'
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Speech from 'expo-speech';




export default function Scripture(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [ispaused, setIsPaused] = useState(false);
  const [speakerActivated, setSpeakerActivated] = useState(false);
  const [showPauseButton, setShowPausedButton] = useState(false);

  const showModal = ({text,verse}) => {

    setModalTitle(text);
    setModalContent(verse);
    setModalVisible(true);
  }

  const speakText = async () => {

    if(ispaused==true){
      const getIsSpeaking = await Speech.isSpeakingAsync();
      if(getIsSpeaking==true && speakerActivated){
        pauseSpeech();
        setIsPaused(true);
        setSpeakerActivated(false);
        setShowPausedButton(false);
      }else{
        resumeSpeech();
        setSpeakerActivated(true);
        setShowPausedButton(true);
      }
    }else{
      speakSpeech();
      setIsPaused(!ispaused);
      setSpeakerActivated(true);
      setShowPausedButton(true);
    }

  }

  const closeModal = () => {
    setModalVisible(!modalVisible);
    Speech.stop();
    setIsPaused(false);
    setSpeakerActivated(false);
    setShowPausedButton(false);
  }

  const speakSpeech = () => {
    Speech.speak(modalContent);
  }

  const pauseSpeech = () => {
    Speech.pause();
  }

  const resumeSpeech = () => {
    Speech.resume();
  }

  const Item = ({text,verse}) => (
    <Pressable
      onPress={() => showModal({text,verse})}>
    <View style={{marginTop:15,flexDirection:'row',backgroundColor:'grey',padding:8}}>
      <Text><Ionicons name="book-outline" size={25} color='white' /></Text>
      <Text style={{marginLeft:10,color:'#fff',fontSize:20}}>{text}</Text>
      {/* <Text style={{marginLeft:30,color:'#fff',fontSize:17}}>{verse}</Text> */}
    </View>
    </Pressable>
  );
    const [loaded] = useFonts({
        'AlegreyaSans-ExtraBold': require('../../assets/fonts/AlegreyaSans-ExtraBold.ttf'),
        'AlegreyaSans-BoldItalic': require('../../assets/fonts/AlegreyaSans-BoldItalic.ttf'),
        'AlegreyaSans-Light': require('../../assets/fonts/AlegreyaSans-Light.ttf'),
      });

      if (!loaded) {
        return null;
      }
  return (
    <View style={{flex:1}}>
        <Text style={styles.title}>Scripture</Text>

      <View>
      <FlatList
        data={props.item.scripture.scripture}
        renderItem={({item})=>
            <Item text={item.scripture_verse} verse={item.bible_verse}/>
        }
        // keyExtractor={item => item.id}
      />
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
          <View style={styles.modalwrapper}>
            <View style={styles.modalheader}>
              <View style={styles.leftside}>
                <Text><Ionicons name="book-outline" size={25} color='white' /></Text>
                <Text style={styles.modalbibletext}>{modalTitle}</Text>
                <Pressable
                  onPress={() => speakText()}
                >
                  <Text style={{marginLeft:10}}>{showPauseButton ? <Ionicons name="pause-circle-outline" size={37} color='white' /> : <Ionicons name="caret-forward-circle-outline" size={37} color='white' />}</Text>
                </Pressable>
              </View>
              <View>
              <Pressable
              onPress={() => closeModal()}
              >
                <Text><Ionicons name="close-circle-outline" size={40} color='white' /></Text>
              </Pressable>
              </View>
            </View>

            <View style={styles.modalView}>
              <ScrollView>
                 <Text style={styles.textStyle}>{modalContent}</Text>
              </ScrollView>
            </View>
          </View>
        {/* <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View> */}
      </Modal>

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
      title:{color:'#fff',fontSize:50,fontFamily:'AlegreyaSans-ExtraBold'},
      modalwrapper: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 100,

      },
      modalbibletext:{
        color:'#fff',
        marginLeft:10,
        fontSize:24,

      },
      modalheader:{
        flexDirection:'row',
        justifyContent:'space-between',
        // marginHorizontal:20,
        // paddingHorizontal:20,
        backgroundColor:'rgba(52, 52, 52, 0.5)',
        // opacity: 0.3,
        padding:10
      },
      leftside:{
        flexDirection:'row',
      },
      modalView: {
        // margin: 20,
        flex:1,
        backgroundColor: 'white',
        // borderRadius: 20,
        padding: 10,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },


      textStyle: {
        color: 'black',
        // fontWeight: 'bold',
        textAlign: 'center',
        fontSize:18
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      }
})