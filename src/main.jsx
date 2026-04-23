import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage.jsx'
import DankePage from './pages/DankePage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/danke" element={<DankePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
