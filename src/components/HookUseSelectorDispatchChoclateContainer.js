import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyChoclate } from '../redux/ActionCreators'

function HookUseSelectorDispatchChoclateContainer() {

    const _numOfChoclates = useSelector(state=>state.choclate.numOfChoclates)
    const dispatch = useDispatch()
    return (
        <p>
            (HookUseSelectorDispatchChoclateContainer) no. of Choclates: {_numOfChoclates}
            <br></br>
            <button onClick={()=> dispatch(buyChoclate())}>Buy Choclate</button>
        </p>
    )
}

export default HookUseSelectorDispatchChoclateContainer
