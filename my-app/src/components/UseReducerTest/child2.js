import {useContext} from 'react'
import {MyCreateContext} from "./reducer";

export function Child2() {
    const {store, dispatch} = useContext(MyCreateContext)
    return (
        <>
            <div>Child2-{store.name}-{store.age}</div>
            <button onClick={() => {
                dispatch({
                    type: 'setAge'
                })
            }}>click
            </button>
        </>
    )
}
