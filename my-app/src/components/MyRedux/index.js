export default function createStore(reducer, enhancer) {
    let currentState = null;
    const listenerCallback = [];

    if (typeof enhancer === 'object') {
        currentState = enhancer;
    } else if (enhancer === 'function') {
        enhancer && enhancer(createStore)(reducer);
    }

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

    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe
    }
}
