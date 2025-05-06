import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./global.css"
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from "./components/Redux/Store.jsx"

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
