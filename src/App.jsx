import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import AlertNotification from "./components/AlertNotification";
import Movies from "./pages/Movies";
import SingleMovie from "./pages/SingleMovies";
// import Footer from "./components/Footer";
import MovieSchedule from "./pages/MovieSchedule";
import NotFound from "./pages/NotFound";
import SeatBooking from "./pages/SeatBooking";
import Payment from "./pages/payment";
import Profile from "./pages/Profile";
import AdminMovies from "./pages/admin/AdminMovies";
import AdminTheater from "./pages/admin/adminTheater";
import Shows from "./pages/admin/Shows";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<SingleMovie />} />
            <Route path="/movies/:id/schedule" element={<MovieSchedule />} />
            {/* <Route
              path="/movies/:id/schedule/:showid"
              element={<SeatBooking />}
            /> */}
            <Route
              path="/movies/:id/schedule/:showid/payment"
              element={<Payment />}
            />
            <Route path="/admin/movies" element={<AdminMovies />} />
            <Route path="/admin/theaters" element={<AdminTheater />} />
            <Route path="/admin/shows" element={<Shows />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {/* <Footer /> */}
        <AlertNotification />
      </div>
    </>
  );
}

export default App;
