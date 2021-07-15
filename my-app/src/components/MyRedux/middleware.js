export default function middleware (...args) {
    return (createStore) => (reducer) => {
        const store = createStore(reducer);
        const middleApi = {
            getState: store.getState,
            dispatch: () => store.dispatch,
        }
        const middleFnList = args.map((item) => item(middleApi));
        const dispatch = compose(...middleFnList)(middleApi.dispatch);
        return {
            ...store,
            dispatch
        }
    }
}

function compose(...args) {
    if (args.length === 0) {
        return (...params) => params;
    } else if (args.length === 1) {
        return (...params) => args[0](...params);
    }
    return args.reduce((prev, next) => (...params) => next(prev(...params)));
}