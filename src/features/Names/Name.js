import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { changeToAiysha, changeToAsma } from './nameSlice';

const Name = () => {
    const name = useSelector(state => state.name);
    const dispatch = useDispatch();
  return (
    <div>
        <hr />
        <h1>This is Name Component</h1>
        <h2>Initially Name is : {name.name}</h2>
        <button onClick={() => dispatch(changeToAsma())}>Change To Asma</button>
        <button onClick={() => dispatch(changeToAiysha())}>Change To Aiysha</button>
    </div>
  )
}

export default Name