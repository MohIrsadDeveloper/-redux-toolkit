import React from 'react'
import { decrement, increment } from './counterSlice'
import { useSelector, useDispatch } from 'react-redux/es/exports'

const Counter = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch();
  return (
    <div>
        <h1>Total Count : {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <hr />
    </div>
  )
}

export default Counter