import React from 'react'
import Ref from './components/Ref';
import UserProvider from './components/contexHook/UserProvider';
import UserGreeting from './components/contexHook/UserGreeting';
import UserRole from './components/contexHook/UserRole';
import CounterComponent from './components/coustomHooks/CounterComponent';




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
      <div>
        <CounterComponent />
      </div>
    </div>
  )
}

export default App
