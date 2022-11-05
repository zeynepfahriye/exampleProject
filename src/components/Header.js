import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Appbar, Menu } from 'react-native-paper'
const Header = ({title,navigation,hasBackButton}) => {
const [visible,setVisible]= useState(false)
const goBack=()=>{navigation?.goBack()}
const openMenu = ()=>{}
  return (
    <Appbar style={{backgroundColor:'purple'}}>
    {
      hasBackButton ? 
      <Appbar.BackAction 
        onPress={goBack}
      /> :
      <Appbar.Action
        icon={"heart"} 
        onPress={()=>{navigation.navigate("Deliveries")}}
      />
    }
        <Appbar.Content 
        title={title}/>
    </Appbar>
  )
}

export default Header