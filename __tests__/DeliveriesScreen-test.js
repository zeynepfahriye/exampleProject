import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import Deliveries from '../src/screens/Deliveries'

test('Form header snapshot',()=>{
    const snap = renderer.create(
        <Deliveries />
    ).toJSON();
    expect(snap).toMatchSnapshot();
})