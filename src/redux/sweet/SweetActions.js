import {BUY_SWEETS} from './SweetTypes'

// number is parameter coming from by calling  'dispatch(buySweets(number))'
export const buySweets = (number) =>{
    return {
        type: BUY_SWEETS,
        payload: number
    }
}

