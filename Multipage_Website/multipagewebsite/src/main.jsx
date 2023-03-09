import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter as Router }  from 'react-router-dom'
import { AppProvider } from './Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
  </AppProvider>,
)
