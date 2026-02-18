import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**
 * Ponto de entrada principal da aplicação React.
 * Renderiza o componente raiz <App /> dentro do elemento 'root' do HTML.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
