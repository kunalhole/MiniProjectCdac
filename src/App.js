import Header from "./components/Header"
import Main from "./components/Main"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
function App() {
  return (
    <Router>
      <div className="bg-primary h-screen flex flex-col">
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
