import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counterSlice';

const Counter = ()=>{
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <div className='counter'>
            <h1>Counter: {count}</h1>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;