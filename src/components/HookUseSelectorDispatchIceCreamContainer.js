import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {buyIceCream} from '../redux/ActionCreators'

function HookUseSelectorDispatchIceCreamContainer() {

    //this useSelector() reads redux state as argument, 
    // so we can avoid 'connect()'
    const _numOfIceCream = useSelector(state =>state.iceCream.numOfIceCream)
    const dispatch = useDispatch()

    return (
        <p>
            (HookUseSelectorIceCreamContainer) - no. of Ice-creams: {_numOfIceCream}
            <br></br>
            <button onClick={() => dispatch(buyIceCream())}>Buy Ice-Cream</button>

        </p>
    )
}

export default HookUseSelectorDispatchIceCreamContainer
