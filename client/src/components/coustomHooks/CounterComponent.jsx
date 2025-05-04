import React from 'react'
import useCounter from './UseCounter'

const CounterComponent = () => {
    const {counter,increment,decrement,reset} = useCounter(0)
  return (
    <div>
        <p>{counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterComponent
