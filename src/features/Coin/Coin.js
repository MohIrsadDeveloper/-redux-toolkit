import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../Counter/counterSlice';

const Coin = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch  = useDispatch();
  return (
    <div>
        <h1>This is Coin Component</h1>
        <h3>Total Count is {count}</h3>

        <button type="submit" onClick={() => dispatch(increment())}>Add</button>
        <button type="submit" onClick={() => dispatch(decrement())}>Less</button>
    </div>
  )
}

export default Coin