import { View, Text, SafeAreaView, FlatList,Platform } from 'react-native'
import React from 'react'
import { Card, Title } from 'react-native-paper'
import Header from '../components/Header'

const Deliveries = ({navigation}) => {
    const deliveries = [1,2]

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
    <Header title={"My deliveries"} hasBackButton={true} navigation={navigation}/>
    <FlatList
    data={deliveries}
    keyExtractor={(item,index)=>`deliveries${index}`}
    renderItem={({item,index})=>
    <Card style={{margin:10,borderWidth:1,marginTop:30}}
    onPress={()=>navigation.navigate("Delivery")}
    >
        <Card.Cover
        source={require('../assets/map.jpg')}
        />
        <Card.Title
        titleStyle={{fontWeight:'bold'}}
        title="01/01/1111"
        subtitle="Delivery person name"
        right={()=>
        <Text style={{fontWeight:'bold',color:'purple',marginHorizontal:10}}>$30</Text>
        }
        >
        </Card.Title>
    </Card>
    }
    >
    </FlatList>
    
    </SafeAreaView>
  )
}

export default Deliveries