import { createStore } from 'redux'

//Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 10 } = {}) => ({
    type: 'SET',
    count
});

const resetCount = ({ count = 0 } = {}) => ({
    type: 'RESET',
    count
});

//Reducers
//1. Reducers are pure functions
//2. Never change state or function

const countReducer =(state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            }
        case 'RESET': return {
            count: 0
        }
        case 'SET': return {
            count: action.count
        }
        default:
            return state;
    }
};

const store = createStore(countReducer);
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch({
    type: 'DECREMENT'
});

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch({
    type: 'INCREMENT'
});
// store.dispatch({
//     type: 'RESET'
// });

// store.dispatch({
//     type: 'SET',
//     count: 101
// });
store.dispatch(setCount({ count: 10 }));
store.dispatch(resetCount({ count: 0 }));