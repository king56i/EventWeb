import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBarADM ({NavBar}:{NavBar:boolean}){
    const [trigger,setTrigger] = useState(false)
    return (<>
        <nav className={!NavBar ? "pcoded-navbar":`pcoded-navbar navbar-collapsed`}>
            <div className="navbar-wrapper" style={{height:"100vh"}}>
                <div className="navbar-content scroll-div " >
                    
                    <ul className="nav pcoded-inner-navbar ">
                        <li className="nav-item pcoded-menu-caption">
                            <label>Events</label>
                        </li>
                        <li  className="nav-item">
                            <Link className="nav-link" to="/admin/events"><span className="pcoded-micon"><i className="feather icon-align-justify"></i></span><span className="pcoded-mtext">Danh sách sự kiện</span></Link>
                        </li>
                        <li className="nav-item pcoded-menu-caption">
                            <label>Organizers</label>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/organizers" className="nav-link "><span className="pcoded-micon"><i className="feather icon-align-justify"></i></span><span className="pcoded-mtext">Danh Sách Organizers</span></Link>
                        </li>
                        <li onClick={()=>setTrigger(!trigger)} className={trigger ?`nav-item pcoded-hasmenu pcoded-trigger`:`nav-item pcoded-hasmenu`}>
                            <a href="#!" className="nav-link "><span className="pcoded-micon"><i className="feather icon-box"></i></span><span className="pcoded-mtext">Action</span></a>
                            <ul className="pcoded-submenu" style={trigger ?{display:'block'}:{display:'none'}}>
                                <li><a href="">Thêm</a></li>
                                <li><a href="">Thùng rác</a></li>
                            </ul>
                        </li>
                        <li className="nav-item pcoded-menu-caption">
                            <label>Roles</label>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/roles" className="nav-link "><span className="pcoded-micon"><i className="feather icon-align-justify"></i></span><span className="pcoded-mtext">Danh Sách Vai Trò</span></Link>
                        </li>
                        <li className="nav-item pcoded-menu-caption">
                            <label>Notifications</label>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link "><span className="pcoded-micon"><i className="feather icon-align-justify"></i></span><span className="pcoded-mtext">Danh Sách Người Dùng</span></a>
                        </li>
                        <li className="nav-item pcoded-hasmenu">
                            <a href="#!" className="nav-link "><span className="pcoded-micon"><i className="feather icon-box"></i></span><span className="pcoded-mtext">Action</span></a>
                            <ul className="pcoded-submenu">
                                <li><a href="">Thêm</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}