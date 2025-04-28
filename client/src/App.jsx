import React from 'react'
import MyHobby from './components/MyHobby';

const App = () => {
    const favoriteFood = "Pizza";
  return (
    <div>
      <h1>Hello, React Developer!</h1>
      <p>My favorite food is {favoriteFood}</p>
      <MyHobby />
    </div>
  )
}

export default App
