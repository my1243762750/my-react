import {useContext} from 'react'
import {MyCreateContext} from "./reducer";

export function Child1() {
    const {store, dispatch} = useContext(MyCreateContext)
    return (
        <>
            <div>Child1-{store.name}-{store.age}</div>
            <button onClick={() => {
                dispatch({
                    type: 'setName'
                })
            }}>click
            </button>
        </>
    )
}
