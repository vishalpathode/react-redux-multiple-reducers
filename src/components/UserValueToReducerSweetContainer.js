
// added 'useState' for forwarding user value to reducer
import React, {useState} from 'react'
import {buySweets} from '../redux/ActionCreators'
import {connect} from 'react-redux'

function UserValueToReducerSweetContainer(props) {

    console.log('props: '+props._numOfSweets)

    // 1 is initial value, 'number' is used as state variable that we are going to pass to reducer
    // it is not a part of redux, just used for initialiing variables
    const [number, setNumber] = useState(1)
    return (
        <div>
            <p>(UserValueToReducerSweetContainer) Number of sweets: {props.numOfSweets}</p>
            <input type='text' value={number} onChange={e=> setNumber(e.target.value)}></input>
            <button onClick={()=> props.buySweets(number)}>Buy {number} Sweets</button>
        </div>
    )
}


const mapStateToProps = state =>{
    
    console.log('state: '+ state.numOfSweets )

    return {
        _numOfSweets: state.numOfSweets 
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buySweets: number => {
            // we need to pass number (user value) to action
            dispatch(buySweets(number))
        }
    }
}


// connect() used to connect our mentioned functions to our component function
export default connect(mapStateToProps, mapDispatchToProps)(UserValueToReducerSweetContainer)
