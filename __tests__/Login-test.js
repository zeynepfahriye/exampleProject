import React from 'react'
import 'react-native'
import {render,fireEvent} from '@testing-library/react-native'
import Login from '../src/screens/Login'
import Register from '../src/screens/Register'

describe("Login Screen",()=> {
    it('should go to home page on login',()=> {
        const navigation = {navigate:()=>{}}
        spyOn(navigation,'navigate');
        const page = render(<Login navigation={navigation}/>);
        page.getByTestId("loginButton")
        const loginButton = page.getByTestId('loginButton')
        fireEvent.press(loginButton)
        expect(navigation.navigate).toHaveBeenCalledWith("Home")
    })
    it('should go to register page on login',()=>{
        const navigation = {navigate:()=>{}}
        spyOn(navigation,'navigate');
        const page = render(<Login navigation={navigation}/>)
        const registerButton = page.getByTestId('registerButton')
        fireEvent.press(registerButton)
        expect(navigation.navigate).toHaveBeenCalledWith("Register")
    })

})
