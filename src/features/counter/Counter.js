import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { useState } from 'react';

  import {increment,
  decrement,
   rest,
   incrementByAmount} from './counterSlice'
 
  



function Counter() {

    const count = useSelector((state) => state.counter.count  );
        const dispatch = useDispatch()
        const [incrementAmount,setIncrementAmount]=useState(0)
        const addValue = Number (incrementAmount) || 0;
        const restAll = ()=>{ 
          setIncrementAmount(0);
          dispatch(rest())
        }

  return (
    <section>  
        <p> {count} </p>
        <div>
        <button onClick={()=> dispatch(increment())} >+</button>
        <button onClick={()=>dispatch(decrement())} >-</button>
        </div>
        <button onClick={()=> dispatch(rest()) } > 0 </button>
        <input
         type='text' 
          value={incrementAmount}
          onChange={(e)=> setIncrementAmount(e.target.value)   }      ></input>

       <div>
      <button  onClick={()=>dispatch(incrementByAmount(addValue))}   > Add Amount </button>

      <button  onClick={restAll}  >  Add Amount  </button>

       </div>
    

    </section>
  )
}

export default Counter
