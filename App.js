import React from 'react'
import {Provider as PaperProvider, TextInput} from 'react-native-paper'
import Login from './src/screens/Login'
import theme from './App.style'
import Register from './src/screens/Register'
import Home from './src/screens/Home'
import Address from './src/screens/Address'
import Delivery from './src/screens/Delivery'
import Deliveries from './src/screens/Deliveries'
import AppNavigation from './src/navigation/AppNavigation'
const App = () => {
  return (
    <PaperProvider theme={theme}>
    <AppNavigation/>
    </PaperProvider>
  )
}

export default App