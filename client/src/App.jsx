import React from 'react'
import MyHobby from './components/MyHobby';
import Food from './components/Food';
import LikeButton from './components/LikeButton';
import ColorChanger from './components/ColorChanger';
import MovieTicket from './components/MovieTicket';
import ToDoList from './components/ToDoList';
import LoginForm from './components/LoginForm';
import MouseTracker from './components/MouseTracker';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import User from './components/User';

const App = () => {
    const favoriteFood = "Pizza";
  return (
    <div>
     <BrowserRouter>
     <nav>
     <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/user/johndoe">User: johndoe</Link>
     </nav>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user/:username" element={<User />} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
