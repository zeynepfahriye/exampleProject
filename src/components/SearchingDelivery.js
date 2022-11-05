import { View, StyleSheet } from 'react-native'
import React from 'react'
import { ActivityIndicator, Button, Title } from 'react-native-paper'
const SearchingDelivery = () => {
  return (
    <View style={styles.flexCenter}>
          <ActivityIndicator animating={true} color='purple' />
          <Title style={styles.title}>search for a delivery person in region</Title>
          <Button style={styles.cancelDeliveryButton} mode="contained" color="purple">Cancel</Button>
        </View>
  )
}
const styles = StyleSheet.create({
    flexCenter:{
        display:"flex",
        justifyContent:'center',
        alignItems:"center",
        flex:1,
        flexDirection:"column"
      },
      title:{
        margin:20,
        marginTop:40,
        textAlign:'center',
        color:"purple"
      },
      cancelDeliveryButton:{
        position:"absolute",
        margin:"2%",
        bottom:0,
        width:"96%",
      }
})
export default SearchingDelivery