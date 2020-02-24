import {BUY_SWEETS} from './SweetTypes'

const initialState = {
    numOfSweets: 100
}

const reducerSweet = (state=initialState, action) => {
    switch(action.type){
        case BUY_SWEETS:
            return{
                ...state,
                numOfSweets: state.numOfSweets - action.payload
        }
        default: return state
    }
}

export default reducerSweet
