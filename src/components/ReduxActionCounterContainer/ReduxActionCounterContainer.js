import React, { useCallback } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import Counter from '../Counter';
import {increase, decrease} from '../../store/redux/counter_reduxAction/actions';

function ReduxActionCounterContainer() {
    const number = useSelector(state=>state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(()=>dispatch(increase()),[dispatch]);
    const ondecrease = useCallback(()=>dispatch(decrease()),[dispatch]);
    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={ondecrease}></Counter>
    )
}

export default ReduxActionCounterContainer;