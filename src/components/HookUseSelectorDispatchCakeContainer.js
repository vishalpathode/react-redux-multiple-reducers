import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../redux/ActionCreators'

function HookUseSelectorDispatchCakeContainer() {

    const _numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()

    return (
        <p>
            (HookUseDispatchCakeContainer) - no. of cakes: {_numOfCakes}
            <br></br>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </p>
    )
}

export default HookUseSelectorDispatchCakeContainer
