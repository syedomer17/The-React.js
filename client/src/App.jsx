import React from 'react'
import MyHobby from './components/MyHobby';
import Food from './components/Food';
import LikeButton from './components/LikeButton';
import ColorChanger from './components/ColorChanger';
import MovieTicket from './components/MovieTicket';
import ToDoList from './components/ToDoList';
import LoginForm from './components/LoginForm';
import MouseTracker from './components/MouseTracker';
import Ref from './components/Ref';
import UserProvider from './components/contexHook/UserProvider';
import UserGreeting from './components/contexHook/UserGreeting';
import UserRole from './components/contexHook/UserRole';



const App = () => {
    const favoriteFood = "Pizza";
  return (
    <div>
      <Ref />
      <div>
        <UserProvider >
          <div>
            <UserGreeting />
            <UserRole />
          </div>
        </UserProvider>
      </div>
    </div>
  )
}

export default App
