import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import Login from '../src/screens/Login'

test('Form header snapshot',()=>{
    const snap = renderer.create(
        <Login />
    ).toJSON();
    expect(snap).toMatchSnapshot();
})