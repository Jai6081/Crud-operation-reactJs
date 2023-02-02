import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditEmp from './EditEmp'
import EmpCreate from './EmpCreate'
import EmpDetail from './EmpDetail'
import EmployeList from './EmployeList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeList />} />
        <Route path='/createEmp' element={<EmpCreate />} />
        <Route path='/emp/edit/:empid' element={<EditEmp />} />
        <Route path='/emp/detail/:empid' element={<EmpDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App