import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
    return (
         <>
         <BrowserRouter>
         <Routes>
         <Route element = {<Weblayout />}>
          <Route path = '/' element={<Home />}/>
          <Route path = '/login' element={<Login/>}/>
          <Route path = '/register' element={<Register />}/>
          <Route path = '*' element={<Notfound />}/>
          </Route>
         </Routes>
         </BrowserRouter>
         </>
      
    )
}
export default App