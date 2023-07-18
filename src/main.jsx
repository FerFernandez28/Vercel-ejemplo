import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ContextProvider from './ContextManager/ContextProvider'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>  
  </BrowserRouter>
  
)
