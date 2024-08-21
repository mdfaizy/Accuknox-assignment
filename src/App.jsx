import Header from "./component/pages/Header"
import Home from "./component/pages/Home"
import { Routes,Route } from "react-router-dom"
import AddWidget from "./component/pages/AddWidget"
function App() {


  return (
    <div className="bg-gray-100">
    <Header/>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/addwidget' element={<AddWidget/>}/>
    </Routes>
    </div>
  )
}

export default App
