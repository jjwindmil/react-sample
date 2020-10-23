import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from 'components/Counter';
import {
    increase,
    decrease,
} from '../../store/redux/counter_reduxAction/actions';
import LayoutTemplate from 'components/Layout/LayoutTemplate';

function CounterPage() {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const ondecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <LayoutTemplate
            props={
                <Counter
                    number={number}
                    onIncrease={onIncrease}
                    onDecrease={ondecrease}
                ></Counter>
            }
        ></LayoutTemplate>
    );
}

export default CounterPage;
