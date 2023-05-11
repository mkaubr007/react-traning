import { useDispatch } from 'react-redux';

const CounterButton = () => {
    // return(
    //     <div>
    //         <button onClick={ props.handleIncrement }  className="btn btn-primary">Increment</button>
    //         <button onClick={ props.handleDecrement }  className="btn btn-danger">Decrement</button>
    //     </div>
    // )

    const dispatch = useDispatch();

    const incrementCounter = () => {
        dispatch({type: 'increment'})
    }

    const decrementCounter = () => {
        dispatch({type: 'decrement'})
    }

    const resetCounter = () => {
        dispatch({type: 'reset'})
    }

    return(
        
        <div>
            <button onClick={ incrementCounter}  className="btn btn-primary">Increment</button>
            <button onClick={ decrementCounter }  className="btn btn-danger">Decrement</button>
            <button onClick={ resetCounter }  className="btn btn-primary">Reset</button>
        </div>
    )
}
export default CounterButton;