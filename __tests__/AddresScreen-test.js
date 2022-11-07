import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import Address from '../src/screens/Address'
test('Form header snapshot',()=>{
    const snap = renderer.create(
        <Address />
    ).toJSON();
    expect(snap).toMatchSnapshot();
})