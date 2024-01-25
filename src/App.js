import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import ContactMe from "./pages/ContactMe";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/userPage" element={<UserPage />} />
            <Route exact path="/contact-me" element={<ContactMe />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
