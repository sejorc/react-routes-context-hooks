import React from 'react'
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './components/Dashboard';
import NotFoundPage from './components/mainComponents/NotFoundPage';


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  )
}
export default App;
