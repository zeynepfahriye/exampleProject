import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Appbar, Menu } from 'react-native-paper'
const Header = ({title,navigation,hasBackButton}) => {
const [visible,setVisible]= useState(false)
const goBack=()=>{navigation?.goBack()}
const openMenu = ()=>{}
  return (
    <Appbar style={{backgroundColor:'orange'}}>
    {
      hasBackButton ? 
      <Appbar.BackAction 
        onPress={goBack}
        color='white'
      /> :
      <Appbar.Action
        icon={"heart"} 
        color='white'
        onPress={()=>{navigation.navigate("Deliveries")}}
      />
    }
        <Appbar.Content 
        title={title}
          color='white'
        />
    </Appbar>
  )
}

export default Header