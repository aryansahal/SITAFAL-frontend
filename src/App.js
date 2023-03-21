import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Vision } from "./pages/Vision/Vision";
import { ContactUs } from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Vision" element={<Vision />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
