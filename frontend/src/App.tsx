import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import "@lib/owlcarousel/assets/owl.carousel.min.css"
import "@css/bootstrap.min.css"
import TrangChu from "./pages/user/TrangChu"
import Events from "./pages/user/Events"
import ThanhToan from "./pages/user/ThanhToan"
import Contact from "./pages/user/Contact"
import UserTemplate from "./template/userTemplate"
import About from "./pages/user/About"
import AdminTemplate from "./template/adminTemplate"
import EventsQly from "./pages/admin/events/events"
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<UserTemplate/>}>
          <Route path="/" element={<TrangChu/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/payment" element={<ThanhToan/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
        <Route path="/admin" element={<AdminTemplate/>}>
          <Route path="events" element={<EventsQly/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
export default App
