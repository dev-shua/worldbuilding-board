import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import './index.css'
import { WBMainTheme } from '@/layouts/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={WBMainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
