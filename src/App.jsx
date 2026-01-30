import "./App.css"
import Home from "./pages/Home"
import { Routes, Route, Outlet } from 'react-router-dom'
import Login from "./pages/login/Login"
import { Auth } from './auth/Auth'
import SinglePage from "./pages/login/singlePage/SinglePage"


function App() {
  return <div>
    <Routes>
      <Route path="/login" element={<Login />} />


      <Route element={<Outlet />}>
        <Route element={<Auth />}>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<SinglePage />} />
        </Route>
      </Route>

    </Routes>
  </div>
}

export default App