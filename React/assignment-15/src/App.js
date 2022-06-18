import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbars from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Students from "./components/Students";
import Courses from "./components/Courses";
import Student from "./components/Student";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/Auth";
import { Login } from "./components/Login";
import { RequireAuth } from "./components/RequireAuth";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/students"
            element={
              <RequireAuth>
                <Students />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/students/:studentId" element={<Student />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
