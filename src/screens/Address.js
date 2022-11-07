import { View, Platform, SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { Button, TextInput ,Card} from 'react-native-paper'

const Address = ({navigation}) => {

    const destination = [1,2];
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
   <Header title={"Address"} hasBackButton={true} navigation={navigation}/>
   <View style={{ padding:20,
    justifyContent:'center',
    paddingTop:100}}>
   <Card>
    <Card.Title title="add address"></Card.Title>
    <Card.Content>
    <View style={styles.marginHorizantal}>
        <TextInput
    style={{backgroundColor:'transparent'}}
     label="origin"/>
    {
        destination.map((destination,index)=>
        <TextInput 
        style={{backgroundColor:'transparent'}}
        key={`destination${index}`}
        label="Destination"
        right={
            destination.lenght > 1 ?
            <TextInput.Icon 
            icon={"close"}
            color="purple" />
            :null
        }
        />
        )}
        <View>
    <Button 
    labelStyle={styles.buttonIconLabel}
    style={styles.buttonIcon} icon={"plus"}></Button>
   </View>
   <Button 
   labelStyle={styles.readyButtonLabel}
   style={styles.readyButton} mode="contained" uppercase={false}>Ready</Button>
   </View>
    </Card.Content>
   </Card>
   </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    marginHorizantal:{
        marginHorizontal:10
    },
    buttonIcon:{
        position:'absolute',
        right:-20,
        top:2,
        color:'purple'
    },
    buttonIconLabel:{
        fontSize:30
    },
    readyButton:{
        margin:10,
        marginTop:80,
        height:50,
        paddingVertical:3,
        backgroundColor:'orange',
        justifyContent:'center'
    },
    readyButtonLabel:{
        fontSize:18
    }
})
export default Address