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
import CreateEditOrganizer from "./pages/admin/organizers/CreateEditOrganizer"
import CreateEditRole from "./pages/admin/roles/CreateEditRole"
import RolesMN from "./pages/admin/roles/roles"
import AddPermsToRole from "./pages/admin/roles/AddPermsToRole"
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
          <Route path="organizers">
            <Route path="add" element={<CreateEditOrganizer/>}/>
            <Route path=":id?" element={<CreateEditOrganizer/>}/>
            <Route index element={<OrganizersMN/>}/>
          </Route>
          <Route path="roles">
            <Route path="add" element={<CreateEditRole/>}/>
            <Route path=":id?" element={<CreateEditRole/>}/>
            <Route path=":id/add-perms-to-role" element={<AddPermsToRole/>}/>
            <Route index element={<RolesMN/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}
export default App
