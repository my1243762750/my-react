import { createStore } from 'redux'

function reducer(state, action) {
    switch (action.type) {
        case 'setName':
            return {
                ...state,
                name: 'si'
            }
        case 'setAge':
            return {
                ...state,
                age: 20
            }
        default:
            return state
    }
}

const store =  createStore(reducer, {
    name: 'san',
    age: 19
})

export default store
