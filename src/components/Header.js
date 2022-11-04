import { View, Text } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'

const Header = ({title}) => {
  return (
    <Appbar>
        <Appbar.BackAction />
        <Appbar.Content title={title}/>
    </Appbar>
  )
}

export default Header