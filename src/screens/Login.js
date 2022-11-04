import { StyleSheet, SafeAreaView,View } from 'react-native'
import React from 'react'
import { Button, Card, TextInput } from 'react-native-paper'

const Login = () => {
  return (
   <SafeAreaView style={styles.content}>
   <View style ={styles.view}>
   <Card>
        <Card.Title title="Example app" titleStyle={styles.cardTitle}></Card.Title>
        <Card.Content>
            <TextInput label="Email" keyboardType='email-address'></TextInput>
            <TextInput label="Password" secureTextEntry={true}></TextInput>
            <Button uppercase={false} style={styles.cardButton}>Forget email/password</Button>
            <Button mode="contained" style={styles.cardButton}>Login</Button>
            <Button style={styles.cardButton}>Register</Button>

        </Card.Content>
    </Card>
   </View>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    content :{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'rgba(101,37,131)'
    },
    view:{
        width:'80%'
    },
    cardTitle:{
        color:'rgba(101,37,131)'
    },
    cardButton:{
        margin:2,
        marginLeft:0,
        marginRight:0
    }
})
export default Login