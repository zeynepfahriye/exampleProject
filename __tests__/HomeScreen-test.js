import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import Home from '../src/screens/Home'

test('Form header snapshot',()=>{
    const snap = renderer.create(
        <Home />
    ).toJSON();
    expect(snap).toMatchSnapshot();
})