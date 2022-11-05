import { View, Text, SafeAreaView, ScrollView ,StyleSheet} from 'react-native'
import React from 'react'
import { Appbar, Button, TextInput } from 'react-native-paper'
import { theme } from '../../App.style'
import Header from '../components/Header'

const Register = ({navigation}) => {
  return (
    <SafeAreaView>
<ScrollView>
   <Header title="Register" hasBackButton={true} navigation={navigation}/>
<View style={styles.content}>
<TextInput label="Name"/>
    <TextInput label="Email" keyboardType='email-address'/>
    <TextInput label="Password" secureTextEntry={true} />
    <TextInput label="Confirm Password"  secureTextEntry={true}/>
    <TextInput label="Phone Number" keyboardType='phone-pad'/>
    <Button 
    onPress={()=>console.log("ebenin ")}
    style={styles.button} mode='contained'>Register</Button>
</View>
 </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
content:{
    padding:15,
    paddingTop:0
},
icon:{
    color:theme.colors.primary
},
button:{
    margin:15,
    marginLeft:0,
    marginRight:0
}
})
export default Register