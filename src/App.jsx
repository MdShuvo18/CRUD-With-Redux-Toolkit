import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import Create from "./components/Create"
import Update from "./components/Update"
import Delete from "./components/Delete"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
        <Route path="/update/:id" element={<Delete/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
