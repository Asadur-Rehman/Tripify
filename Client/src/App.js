import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import AdminNavbar from "./components/Admin/AdminNavbar/AdminNavbar";
import SpecialDeals from "./components/SpecialDeals/SpecialDeals";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import DashboardCard from "./components/Admin/AdminDashboard/DashboardCard/DashboardCard";
import AdminCustomersInfo from "./components/Admin/AdminCustomersInfo/AdminCustomersInfo";
import Discover from "./components/Navbar/Discover/Discover";
import Aboutus from "./components/Aboutus/Aboutus";
import Contactus from "./components/Contactus/Contactus";
import WorkForUs from "./components/pages/WorkForUs/WorkForUs";
import Suggestion from "./components/pages/Suggestion/Suggestion";
import Terms from "./components/pages/Terms/Terms";
import Privacy from "./components/pages/Privacy/Privacy";
import Booking from "./components/pages/Booking/Booking";
import AdventureTravel from "./components/Footer/TravelInterests/AdventureTravel/AdventureTravel";
import GuideBooks from "./components/Footer/Shop/GuideBooks/GuideBooks";
import Books from "./components/Footer/Shop/GuideBooks/Books/Books";
import EnglishGuides from "./components/Footer/Shop/EnglishGuides/EnglishGuides"
import UrduGuides from "./components/Footer/Shop/UrduGuides/UrduGuides";
import EnglishBooks from "./components/Footer/Shop/EnglishGuides/EnglishBooks/EnglishBooks";
import AdminBookings from "./components/Admin/AdminBookings/AdminBookings";
import AdminSupport from './components/Admin/AdminSupport/AdminSupport';
import EnglishBook from "./components/Footer/Shop/EnglishGuides/EnglishBooks/EnglishBook/EnglishBook";
import Contactusform from "./components/Contactus/Contactusform/Contactusform";
import Destination from "./components/pages/Destination/Destination";
import Bookingform from "./components/Bookingform/Bookingform";
import Hotelcard from "./components/Hotelcard/Hotelcard";
import AdminHotels from './components/Admin/AdminHotels/AdminHotels';
import AddHotel from "./components/Admin/AdminHotels/AddHotel/AddHotel";
import EditHotel from "./components/Admin/AdminHotels/EditHotel/EditHotel";
import UrduBooks from "./components/Footer/Shop/UrduGuides/UrduBooks/UrduBooks"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/guidebooks" element={<GuideBooks/>}/>
        <Route path="/englishbooks/:name" element={<EnglishBooks/>}/>
        <Route path="/books/:name" element={<Books/>}/>
        <Route path="/urdubooks/:name" element={<UrduBooks/>}/>
        <Route path="/adventuretravel" element={<AdventureTravel/>}/>
        <Route path="/discover" element={<Discover/>}/>
        <Route path="/englishguides" element={<EnglishGuides/>}/>
        <Route path="/urduguides" element={<UrduGuides/>}/>
        <Route path="/admin-nav" element={<AdminNavbar />} />
        <Route path="/admin-dash" element={<AdminDashboard />} />
        <Route path="/special" element={<SpecialDeals />} />
        <Route path="/cardDashboard" element={<DashboardCard />} />
        <Route path="/customerAdmin" element={<AdminCustomersInfo />} />
        <Route path="/adminbookings" element={<AdminBookings />} />
        <Route path="/adminsupport" element={<AdminSupport />} />
        <Route path="/specialDeals" element={<SpecialDeals />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/workForUs" element={<WorkForUs />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/englishbook/:name/:image/:description/:price" element={<EnglishBook/>}/>
        <Route path="/bookingform/:id" element={<Bookingform/>} />
        <Route path="/contactUsForm" element={<Contactusform/>} />
        <Route path="/adminHotel" element={<AdminHotels/>} />
        <Route path="/addHotel" element={<AddHotel />} />
        <Route path="/editHotel/:id" element={<EditHotel />} />
        <Route path="/destination/:name/:city" element={<Destination />} />
      </Routes>
    </>
  );
}

export default App;
