export default function thunk({getState, dispatch}) {
    return (next) => (action) => {
        if (action === 'function') {
            action(getState, dispatch);
        }
        return next(action);
    }
}