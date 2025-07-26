import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee'
import EmployeeList from './pages/EmployeeList'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Create Employee</Link></li>
          <li><Link to="/employees">Employee List</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </Router>
  )
}

export default App
