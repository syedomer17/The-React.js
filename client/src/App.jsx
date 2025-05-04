import React from 'react'
import Ref from './components/Ref';
import UserProvider from './components/contexHook/UserProvider';
import UserGreeting from './components/contexHook/UserGreeting';
import UserRole from './components/contexHook/UserRole';
import CounterComponent from './components/coustomHooks/CounterComponent';
import Controlled from './components/Controlled-vs-Uncontrolled-Components/Controlled';
import UnControlled from './components/Controlled-vs-Uncontrolled-Components/UnControlled';




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
      <div>
        <Controlled />
        <UnControlled />
      </div>
    </div>
  )
}

export default App
