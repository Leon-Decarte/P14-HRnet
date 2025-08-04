import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import CreateEmployee from "./pages/CreateEmployee"
import EmployeeList from "./pages/EmployeeList"
import Navbar from "./components/Navbar"


function App() {
  return (
    <Router>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </Router>
  )
}

export default App
