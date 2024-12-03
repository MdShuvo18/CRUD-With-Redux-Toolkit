import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import Create from "./components/Create"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
