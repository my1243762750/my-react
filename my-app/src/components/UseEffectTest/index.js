import React, {useState, useEffect} from 'react'

// useEffect 相当于componentDidMount componentDidUpdate componentWillUnmount
export function UseEffectTest() {
    const [status, setStatus] = useState(false)
    const [name, setName] = useState('san')
    const [age, setAge] = useState(19)
    useEffect(() => {
        console.log('useEffect1')
        return () => {
            console.log('componentWillUnmount1')
        }
    }, [name, age])
    useEffect(() => {
        console.log('useEffect2')
        return () => {
            console.log('componentWillUnmount2')
        }
    }, [name, age])
    return (
        <>
            <div>useEffect</div>
            {
                status ? <div>
                        <span>{name}</span>
                        <button onClick={() => {
                            setName('san' + Date.now())
                        }}>setName
                        </button>
                    </div>
                    : <div>
                        <span>{age}</span>
                        <button onClick={() => {
                            setAge(age + 1)
                        }}>setAge
                        </button>
                    </div>
            }
            <button onClick={() => {setStatus(!status)}}>toggleStatus</button>
        </>
    )
}
