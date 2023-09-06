import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
// import Models from "./Pages/Models";
import Feedback from "./Pages/Feedback";
// import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import BookCar from "./Pages/BookCar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="bookCar" element={<BookCar location={useLocation()} />} />
        <Route path="feedback" element={<Feedback />} />
        {/* <Route path="team" element={<Team />} /> */}
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
