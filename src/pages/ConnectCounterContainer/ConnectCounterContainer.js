import React from 'react';
import Counter from '../Counter';
import {connect} from 'react-redux';
import {increment, decrement} from '../../store/redux/counter/actions';
import { bindActionCreators } from 'redux';
function ConnectCounterContainer({number, increase, decrease}) {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease}></Counter>
    )
}

const mapStateToProps = state => ({
    number: state.counter.number,
});

const mapDispatchToProps = dispatch=>({
    increase: ()=>{
        console.log('increase');
        dispatch(increment());
    },
    decrease:()=>{
        console.log('decrease');
        dispatch(decrement());
    }

});

//export default ConnectCounterContainer;
//export default connect(mapStateToProps, mapDispatchToProps)(ConnectCounterContainer);
/*
export default connect(state=>({number:state.counter.number,}), dispatch=>({
    increase:()=>dispatch(increment()),
    decrease:()=>dispatch(decrement()),
}))(ConnectCounterContainer);
*/
export default connect(
    state=>({
        number:state.counter.number,
    }),
    dispatch=>bindActionCreators({
        increase : increment,
        decrease : decrement,
    },dispatch
    ),
)(ConnectCounterContainer);