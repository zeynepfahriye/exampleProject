import { View, Platform, SafeAreaView, ScrollView ,StyleSheet, Dimensions} from 'react-native'
import React from 'react'
import { Appbar, Button, Card, TextInput } from 'react-native-paper'
import { theme } from '../../App.style'
import Header from '../components/Header'

const Register = ({navigation}) => {
   
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#e0b0ff'}}>
    {Platform.OS === 'ios' &&
    <View style={{
        width: "100%",
        height: 100, // For all devices, even X, XS Max
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: "orange"}}
   />}
  <ScrollView>
   <Header title="Register" hasBackButton={true} navigation={navigation}/>
<View style={styles.content}>
<Card>
    <Card.Title title="Register"></Card.Title>
    <Card.Content>
    <TextInput
     label="Name"
     style = {{backgroundColor:'transparent'}}
     />
    <TextInput 
    label="Email"
    keyboardType='email-address'
    style = {{backgroundColor:'transparent'}}
     />
    <TextInput 
    style = {{backgroundColor:'transparent'}} 
    label="Password" 
    secureTextEntry={true} />
    <TextInput
    style = {{backgroundColor:'transparent'}}
     label="Confirm Password" 
      secureTextEntry={true}/>
    <TextInput
    style = {{backgroundColor:'transparent'}}
     label="Phone Number" 
     keyboardType='phone-pad'/>
    <Button 
    onPress={()=>console.log("****** ")}
    style={styles.button} mode='contained'>Register</Button>
    </Card.Content>
</Card>

</View>
 </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
content:{
    padding:20,
    justifyContent:'center',
    paddingTop:100
},
icon:{
    color:theme.colors.primary
},
button:{
    margin:15,
    marginLeft:0,
    marginRight:0,
    backgroundColor:'orange'
}
})
export default Register