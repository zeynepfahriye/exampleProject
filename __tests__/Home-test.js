import React from 'react'
import {render} from '@testing-library/react-native'
import Home from '../src/screens/Home'
describe('Home screen',()=> {
    it('should show map without confirm and search parts',()=> {
        const page = render(<Home />)
        page.getByTestId("mapView")
        expect(page.queryAllByTestId("confirmDeliveryCard").length).toEqual(0)
        expect(page.queryAllByTestId("searchDeliveryCard").length).toEqual(0)
    })

    it('should show map without confirm and search',()=>{
        const page = render (<Home state={2}/>)
        page.getByTestId("mapView")
        expect(page.queryAllByTestId("confirmDeliveryCard").length).toEqual(1)
        expect(page.queryAllByTestId("searchDeliveryCard").length).toEqual(0)
    })
    it('should show map without confirm and search',()=>{
        const page = render (<Home state={3}/>)
        page.getByTestId("mapView")
        expect(page.queryAllByTestId("confirmDeliveryCard").length).toEqual(0)
        expect(page.queryAllByTestId("searchDeliveryCard").length).toEqual(1)
    })
})