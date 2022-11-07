import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import Delivery from '../src/screens/Delivery'

test('Form header snapshot',()=>{
    const snap = renderer.create(
        <Delivery />
    ).toJSON();
    expect(snap).toMatchSnapshot();
})