import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './App'
import Background from './Background'
import './index.css'
import store from './store'



ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <Provider store={store}>
    <HashRouter>
      <App />
      <Background />
    </HashRouter>

  </Provider>
  //</React.StrictMode>,
)
