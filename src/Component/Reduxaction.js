import React from 'react'
import {useEffect} from 'react';

import { useSelector, useDispatch, useStore } from 'react-redux'


function Reduxaction() {
    const dispatch = useDispatch();


    


    const pageArrayTwo = useStore();
    const pageArray = pageArrayTwo.getState();
    // var ten = pageArray.counterReducerten.countten;
    // console.log(ten);
    console.log(pageArray)




    const Increment = () => {
        dispatch({'type': 'Increment'})
    }

    const Decrement = () => {
        dispatch({'type': 'Decrement'})
    }

    const Incrementten = () => {
        dispatch({'type': 'Incrementten'})
    }

    const Decrementten = () => {
        dispatch({'type': 'Decrementten'})
    }

    return (
        <div className="redux_action">
            {/* <p>{pageArray.counterReducerten.countten}</p> */}
            {/* <p>{ten}</p> */}
            <button onClick={Increment} >Add</button>
	        <button onClick={Decrement}>Minus</button>

            <button onClick={Incrementten} >Add 10</button>
	        <button onClick={Decrementten}>Minus 10</button>            
        </div>
    )
}

export default Reduxaction;
