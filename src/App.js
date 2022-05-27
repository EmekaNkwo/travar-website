import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Hotel from "./Pages/Hotel/Hotel";
import HotelList from "./Pages/HotelList/HotelList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotellist" element={<HotelList />} />
        <Route path="/hotellist/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
