import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import User from './components/User';
import Dashboard from './components/Dashboard';

const Routse = () => {
  return (
    <div>
      <BrowserRouter>
     <nav>
     <Link to="/">Home</Link>
        {/* <Link to="/profile">Profile</Link>
        <Link to="/user/johndoe">User: johndoe</Link> */}
     </nav>
     <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/user/:username" element={<User />} />
        <Route path='/dashbord' element={<Dashboard />} /> */}
        <Route path='/useRef' element={<UseRef />}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default Routse
