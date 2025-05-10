import React, { useState } from 'react'
import Ref from './components/Ref';
import UserProvider from './components/contexHook/UserProvider';
import UserGreeting from './components/contexHook/UserGreeting';
import UserRole from './components/contexHook/UserRole';
import CounterComponent from './components/coustomHooks/CounterComponent';
import Controlled from './components/Controlled-vs-Uncontrolled-Components/Controlled';
import UnControlled from './components/Controlled-vs-Uncontrolled-Components/UnControlled';
import SignUp from './components/form/SignUp';
import { Userprovider } from './components/context2.0/UserCon';
import UserInfo from './components/context2.0/UserInfo';
import LikeButton from './components/Redux/LikeButton';
import ToggleSwitchToggleSwitch from './components/Reducer/ToggleSwitchToggleSwitch';
import SlowCountComponent from './components/Memo/SlowCountComponent';
import ParentComponent from './components/UseImperativeHandle/ParentComponent';
import ResizableBox from './components/useLayoutEffect/ResizableBox';
import Modal from './components/React-Portals/Modal';
import { useSelector } from 'react-redux';
import ParentInput from './components/Forward-Refs/ParentInput';
import withTimer from "./components/HOC/withTimer"
import SimpleComponent from "./components/HOC/SimpleComponent"

const App = () => {
    const favoriteFood = "Pizza";

    const [isOpen,setIsOpen]  = useState(false);

    const timeComponent = withTimer(SimpleComponent)
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
      <div>
        <SignUp />
      </div>
      {/* <div>
        <Userprovider>
        <div className="p-6 max-w-md mx-auto">
        <UserInfo />
        <ToggleEvent />
      </div>
        </Userprovider>
      </div> */}
      <div>
        <LikeButton />
      </div>
      <div>
        <ToggleSwitchToggleSwitch />
      </div>
      <div>
        <SlowCountComponent />
      </div>
      <div>
        <ParentComponent />
      </div>
      <div>
        <ResizableBox />
      </div>
     <div className="p-6">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h2 className="text-xl font-semibold mb-2">Hello from Modal!</h2>
          <p>This modal is rendered using a portal 🚀</p>
        </Modal>
      )}
    </div>
    <div>
      <ParentInput />
    </div>
    <div>
      <timeComponent />
    </div>
    </div>
  )
}

export default App
