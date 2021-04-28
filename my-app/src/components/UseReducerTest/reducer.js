import {useReducer, createContext} from "react";

export const MyCreateContext = createContext(null)

export function MyReducer(props) {
    const reducer = (state, action) => {
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
    const state = {name: 'san', age: 19}
    const [store, dispatch] = useReducer(reducer, state)
    return (
        <>
            <MyCreateContext.Provider value={{store, dispatch}}>
                {props.children}
            </MyCreateContext.Provider>
        </>
    )
}
