import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import AddTask from "./components/task/AddTask";
import UpdateTask from "./components/task/UpdateTask";
import TasksDone from "./components/task/TasksDone";
import Register from "./components/auth/register/Register";
import Login from "./components/auth/login/Login";
import { Navbar } from "./components/navbar/Navbar";
import { AuthContext } from "./components/context/AuthContext";
import { useContext } from "react";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                 <Navbar/>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add"
            index
            element={
              <ProtectedRoute>
                <AddTask />
              </ProtectedRoute>
            }
          />
          <Route
            path="/update/:id"
            index
            element={
              <ProtectedRoute>
                <UpdateTask />
              </ProtectedRoute>
            }
          />
          <Route path="/tasks-done" element={<ProtectedRoute>
                 <Navbar/>
                <TasksDone />
              </ProtectedRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
