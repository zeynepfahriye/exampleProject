import { Image, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { FAB } from 'react-native-paper'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import MapView, { Marker } from 'react-native-maps'
const Home = () => {
  return (
    <SafeAreaView style={styles.flex}>
     <MapView
      style={styles.flex}
      initialRegion={{
        latitude:-3.722,
        longitude:-38.515,
        latitudeDelta:0.09,
        longitudeDelta:0.04
      }}
      >
      <Marker 
      description='Delivery person'
      coordinate={{latitude:-3.722,
        longitude:-38.515,}} >
        </Marker>
      </MapView>
      <FAB style={styles.fab} icon="plus"></FAB>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
flex:{
    flex:1
},
fab:{
    position:'absolute',
    right:0,
    bottom:0,
    margin:16
}
})

export default Home