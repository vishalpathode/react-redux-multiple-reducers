import {combineReducers} from 'redux'
import reducerCake from './cake/ReducerCake'
import reducerIceCream from './iceCream/ReducerIceCream'
import reducerChoclate from './choclate/ReducerChoclate'
import reducerSweet from './sweet/ReducerSweet'

const rootReducer = combineReducers({
    cake: reducerCake,
    iceCream: reducerIceCream,
    choclate: reducerChoclate,
    sweet: reducerSweet
})


export default rootReducer