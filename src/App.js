import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer position="top-center"/>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          {/* <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          /> */}
          <Route
            path="/signup"
            element={
              <>
                <Signup />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/contactus"
            element={
              <>
                <ContactUs />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Services />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
