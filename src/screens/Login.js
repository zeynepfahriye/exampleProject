import { StyleSheet, SafeAreaView,View } from 'react-native'
import React from 'react'
import { Button, Card, TextInput,Text } from 'react-native-paper'
import { Formik } from 'formik'
import { loginForm } from './LoginForm'

const Login = ({navigation}) => {
const login = ()=> {navigation.navigate("Home")}
const register = ()=> {navigation.navigate("Register")}
  return (
   <SafeAreaView style={styles.content}>
   <View style ={styles.view}>
   <Card>
        <Card.Title title="Example app" titleStyle={styles.cardTitle}></Card.Title>
        <Card.Content>
        <Formik
        initialValues={{email:"",password:""}}
        onSubmit={login}
        validationSchema={loginForm}
        >
        {({handleSubmit,handleChange,errors,setFieldTouched,touched,values})=>(
            <>
            <TextInput
            style={{backgroundColor:'transparent'}} 
            label="Email" 
            keyboardType='email-address' 
            onChangeText={handleChange('email')}
            testID='email'
            onFocus={()=>setFieldTouched('email')}
            />
            {touched.email && errors.email ? <Text testID='error-email' style={{color:'red'}}>{errors.email}</Text>
            :null
            }
            <TextInput
             label="Password"
             style={{backgroundColor:'transparent'}}  
             secureTextEntry={true}
             onChangeText={handleChange('password')}
             testID='password'
             onFocus={()=>setFieldTouched('password')}
              />
              {touched.password && errors.password ? <Text testID='error-password' style={{color:'red'}}>{errors.password}</Text>
            :null
            }
            <Button testID='recoveryButton' uppercase={false} style={styles.cardButton} disabled={values.email =='' || errors.email ? true : false}>Forget email/password</Button>
            <Button testID='loginButton' onPress={handleSubmit} mode="contained" style={[styles.cardButton,{backgroundColor:'orange'}]}>Login</Button>
            <Button testID='registerButton' onPress={register} style={styles.cardButton}>Register</Button>
            </>
        )}
       
       </Formik>
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
        backgroundColor:'#e0b0ff'
    },
    view:{
        width:'85%'
    },
    cardTitle:{
        color:'purple'
    },
    cardButton:{
        margin:2,
        marginLeft:0,
        marginRight:0,
    }
})
export default Login