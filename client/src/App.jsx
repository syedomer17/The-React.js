import React from 'react'
import MyHobby from './components/MyHobby';
import Food from './components/Food';
import LikeButton from './components/LikeButton';
import ColorChanger from './components/ColorChanger';
import MovieTicket from './components/MovieTicket';
import ToDoList from './components/ToDoList';
import LoginForm from './components/LoginForm';
import MouseTracker from './components/MouseTracker';

const App = () => {
    const favoriteFood = "Pizza";
  return (
    <div>
      <h1>Hello, React Developer!</h1>
      <p>My favorite food is {favoriteFood}</p>
      <MyHobby />
      <Food dish="pizza" rating = {5} />
      <LikeButton />
      <ColorChanger />
      <MovieTicket />
      <ToDoList />
      <LoginForm />
      <MouseTracker />
    </div>
  )
}

export default App
