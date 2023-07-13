import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import GlobalHeader from '../../components/globalHeader/GlobalHeader'
import { AntDesign } from '@expo/vector-icons';



const InvitationSent = ({navigation}) => {
  return (
    <View style={styles.main}>
        <GlobalHeader LIcon={<AntDesign name="left" size={24} color="black" />}
        text={' '}
        onPress={()=>navigation.goBack()}
        />
      <View style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'70%'}}>
        <Image source={require('../../assests/icons/ProfileCompletionInvite.png')} style={{width:150,height:150}}/>
        <Text style={{marginTop:35,fontSize:16,padding:10,margin:10,width:'80%',textAlign:'center',color:'#e8e1db'}}>Invitation sent to the caretaker successfully.</Text>
      </View>
      <TouchableOpacity onPress={()=>(navigation.navigate('Connecting'))} style={{marginTop:'10%',borderWidth:1,height:50,width:'90%',alignItems:'center',justifyContent:'center',borderRadius:25,borderColor:'#bfb0a2',alignSelf:'center'}}>
        <Text style={{color:'#ded3c9',fontWeight:'600',fontSize:16}}>Go to the  maim menu</Text>
      </TouchableOpacity>
    </View>
  )
}

export default InvitationSent

const styles = StyleSheet.create({
    main:{
        backgroundColor:'#86705d',
        flex:1
    }
})