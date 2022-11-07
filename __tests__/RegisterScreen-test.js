import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import Register from '../src/screens/Register'

test('Form header snapshot',()=>{
    const snap = renderer.create(
        <Register />
    ).toJSON();
    expect(snap).toMatchSnapshot();
})