import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { Avatar, Card, List } from 'react-native-paper'
import MapView from 'react-native-maps'

const Delivery = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
    <Header title={"Delivery Details"} hasBackButton={true} navigation={navigation}/>
      <View style={{flex:1}}>
        <MapView
        style={{flex:1}}
        initialRegion={{
          latitude: -3.722,
          longitude: -38.515,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}>
        </MapView>
      </View>
      <Card>
        <Card.Title 
            title={"01/01/1111"}
            titleStyle={{fontWeight:'bold'}}
            right={()=>
            <Text style={{marginHorizontal:10,fontWeight:'bold',color:'purple'}}>$30,00</Text>
            }
        />
        <Card.Content>
            <List.Item
            title={"Zeynep Çakır"}
            description="53 deliveries"
            left={()=>
            <Avatar.Image
            size={52}
            source={require('../assets/icons/woman-2.png')}
             />
            }
            />
            <List.Item
            title="Origin"
            description="Origin street,40"
             left={()=>
             <List.Icon icon="flag"/>}
            />
            <List.Item
            title="Origin"
            description="Origin street,40"
             left={()=>
             <List.Icon icon="flag-checkered"/>}
            />
        </Card.Content>
      </Card>
    </SafeAreaView>
  )
}

export default Delivery