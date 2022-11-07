import { View, Image, SafeAreaView } from 'react-native'
import React,{useEffect} from 'react'
import MapView, { Marker } from 'react-native-maps'
import { FAB } from 'react-native-paper';
import Header from '../components/Header';
import SearchingDelivery from '../components/SearchingDelivery'
import ConfirmDeliveryCard from '../components/ConfirmDeliveryCard'
const Home = ({navigation,state}) => {
  const states = state || 1;
  
  return (
    <SafeAreaView style={{flex:1}}>
    <Header title={"Delivery Details"} navigation={navigation}/>
      <MapView 
      testID='mapView'
      style={{flex:1}}
      initialRegion={{
        latitude: -3.722,
          longitude: -38.515,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
      }}
      >
      {states == 1 ? 
      <>
      <Marker
      description='1'
      coordinate= {{latitude: -3.722,longitude: -38.515}}>
      <Image 
      style={{width:30,height:40}}
      source={require('../assets/icons/motor.png')}/>
      </Marker> 
      <Marker
      description='1'
      coordinate= {{latitude: -3.720,longitude: -38.517}}>
      <Image 
      style={{width:30,height:40}}
      source={require('../assets/icons/motor.png')}/>
      </Marker> 
      <Marker
      description='1'
      coordinate= {{latitude: -3.722,longitude: -38.512}}>
      <Image 
      style={{width:30,height:40}}
      source={require('../assets/icons/motor.png')}/>
      </Marker> 
      </>:null} 
      </MapView>
      <FAB 
      icon={"plus"}
      size={30}
      onPress={()=>navigation.navigate("Address")}
      style={{width:60,height:60,borderRadius:30,position:'absolute',right:0,bottom:0,margin:15,backgroundColor:'purple',alignItems:'center'}}
      ></FAB>
      {states == 2 ? <ConfirmDeliveryCard/>:null}
      {states == 3 ? <SearchingDelivery/>:null}
    </SafeAreaView>
  )
}

export default Home