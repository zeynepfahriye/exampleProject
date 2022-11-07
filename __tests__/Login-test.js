import React from 'react'
import 'react-native'
import {render,fireEvent, waitFor} from '@testing-library/react-native'
import Login from '../src/screens/Login'
import Register from '../src/screens/Register'
import { loginForm } from '../src/screens/LoginForm'

describe("Login Screen",()=> {
    it('should go to home page on login',async ()=> {
        const navigation = {navigate:()=>{}}
        spyOn(navigation,'navigate');

        const page = render(<Login navigation={navigation}/>);

        const email = page.getByTestId('email')
        const password = page.getByTestId('password')
        fireEvent.changeText(email,"valid@gmail.com")
        fireEvent.changeText(password,"12345678")

        const loginButton = page.getByTestId('loginButton')
        fireEvent.press(loginButton)
        await waitFor(()=>expect(navigation.navigate).toHaveBeenCalledWith("Home")) 
    })
     it('should go to register page on login',()=>{
         const navigation = {navigate:()=>{}}
         spyOn(navigation,'navigate');
         const page = render(<Login navigation={navigation}/>)
         const registerButton = page.getByTestId('registerButton')
         fireEvent.press(registerButton)
         expect(navigation.navigate).toHaveBeenCalledWith("Register")
     })
    it('should form be invalid if email is empty',()=>{
        const fromValues = {email:""}
        expect(loginForm.isValidSync(fromValues)).toBeFalsy();
    })
     it('shoudl form be invalid if email is invalid',()=>{
         const formValues ={email:"invalid"}
         expect(loginForm.isValidSync(formValues)).toBeFalsy();
     })

     it('should form be invalid if password is empty',()=>{
         const formValues = {password:"",email:"valid@email.com"}
         expect(loginForm.isValidSync(formValues)).toBeFalsy()
     })
     it('should form be invalid if password is empty',()=>{
         const formValues = {password:"validPassword",email:"valid@email.com"}
         expect(loginForm.isValidSync(formValues)).toBeTruthy()
     })
    it('should show error message if email is touched and it is empty',async()=>{
        const page = render(<Login/>);

        const email = page.getByTestId('email')
        fireEvent.changeText(email,"")

        const loginButton = page.getByTestId("loginButton");
        fireEvent.press(loginButton)

        await waitFor(()=> page.getByTestId("error-email"))
    })
     it("should hide error message if email in not touched",async()=>{
         const page = render(<Login/>)
         await waitFor(()=>{expect(page.queryAllByTestId("error-email").length).toEqual(0)})
     })
     it('should show error message if password is touched and it is empty',async()=>{
        const page = render(<Login/>);

        const password = page.getByTestId('password')
        fireEvent.changeText(password,"")

        const loginButton = page.getByTestId("loginButton");
        fireEvent.press(loginButton)

        await waitFor(()=> page.getByTestId("error-password"))
    })
     it("should hide error message if password in not touched",async()=>{
         const page = render(<Login/>)
         await waitFor(()=>{expect(page.queryAllByTestId("error-password").length).toEqual(0)})
     })

     it('should disable recovery button if email is empty',async()=>{
        const page = render(<Login />)
        const recoveryButton = page.getByTestId("recoveryButton")
        await waitFor(()=>expect(recoveryButton.props.accessibilityState.disabled).toBeTruthy)
     })
     it('should disable recovery button if email has error',async()=>{
        const page = render(<Login/>)

        const email = page. getByTestId('email')
        fireEvent.changeText(email,"invalid")

        const recoveryButton = page.getByTestId("recoveryButton")
        await waitFor(()=>expect(recoveryButton.props.accessibilityState.disabled).toBeTruthy())
     })
})
