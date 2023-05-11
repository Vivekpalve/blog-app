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
import Privateroute from "./components/Privateroute";
import UserDashboard from "./pages/user-private-routes/UserDashboard";
import ProfileInfo from "./pages/user-private-routes/ProfileInfo";
import PostPage from "./pages/PostPage";
import UserProvider from "./context/UserProvider";
import Categories from "./pages/Categories";
function App() {
  return (
    <UserProvider>
      <div className="App">
        <Router>
          <ToastContainer position="top-center" />
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
            <Route
              path="/posts/:postId"
              element={
                <>
                  <PostPage />
                </>
              }
            />
            <Route
              path="/categories/:categoryTitle/:categoryId"
              element={
                <>
                  <Categories />
                </>
              }
            />

            <Route path="/user" element={<Privateroute />}>
              <Route path="dashboard" element={<UserDashboard />} />
              <Route path="profile" element={<ProfileInfo />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
