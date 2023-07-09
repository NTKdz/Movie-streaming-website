import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LoadingOverlay from './css-testing/loading-overlay/LoadingOverlay.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoadingOverlay />
  </React.StrictMode>,
)
