import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ContactModalProvider } from './context/ContactModalContext'
import { MobileNavProvider } from './context/MobileNavContext'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContactModalProvider>
        <MobileNavProvider>
          <App />
        </MobileNavProvider>
      </ContactModalProvider>
    </BrowserRouter>
  </React.StrictMode>
)