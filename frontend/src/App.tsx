import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import "@css/bootstrap.min.css"
import TrangChu from "./pages/user/TrangChu"
import Events from "./pages/user/Events"
import ThanhToan from "./pages/user/ThanhToan"
import Contact from "./pages/user/Contact"
import UserTemplate from "./template/userTemplate"
import About from "./pages/user/About"
import AdminTemplate from "./template/adminTemplate"
import EventsMN from "./pages/admin/events/events"
import OrganizersMN from "./pages/admin/organizers/organizers"
import CreateEditEvent from "./pages/admin/events/CreateEditEvent"
import TrashCan from "./pages/admin/events/TrashCan"
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
          <Route path="events">
            <Route path="add" element={<CreateEditEvent/>}/>
            <Route path="trashcan" element={<TrashCan/>}/>
            <Route path=":id?" element={<CreateEditEvent/>}/>
            <Route index element={<EventsMN/>}/>
          </Route>
          <Route path="organizers" element={<OrganizersMN/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
export default App
