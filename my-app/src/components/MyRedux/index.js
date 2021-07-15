export default function createStore(reducer, enhancer) {
    let currentState = null;
    const listenerCallback = [];

    const getState = () => {
        return currentState;
    }

    const dispatch = (action) => {
        currentState = reducer(currentState, action);
        listenerCallback.forEach(fn => fn())
    }

    const subscribe = (fn) => {
        fn = fn || function () {};
        listenerCallback.push(fn);
    }

    if (typeof enhancer === 'object') {
        currentState = enhancer;
    }

    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe
    }
}
