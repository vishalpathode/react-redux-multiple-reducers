import { BUY_CHOCLATE } from "./ChoclateTypes"

const initialState = {
    numOfChoclates:50
}

const reducerChoclate = (state=initialState,action) => {
    switch(action.type){
        case BUY_CHOCLATE: 
        return{
            ...state,
            numOfChoclates: state.numOfChoclates -1
        }
        default: return state
    }
}

export default reducerChoclate