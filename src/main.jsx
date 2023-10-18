import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import { store } from './features/store'
import Router from './components/routes/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <Router>
      <Home/>
      </Router>
    </Provider>

)