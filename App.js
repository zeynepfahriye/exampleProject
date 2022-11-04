import React from 'react'
import {Provider as PaperProvider, TextInput} from 'react-native-paper'
import Login from './src/screens/Login'
import theme from './App.style'
import Register from './src/screens/Register'
import Home from './src/screens/Home'
const App = () => {
  return (
    <PaperProvider theme={theme}>
    <Home/>
    </PaperProvider>
  )
}

export default App