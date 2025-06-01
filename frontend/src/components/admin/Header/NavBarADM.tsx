import { pageContext } from "@src/context/pageContext"
import { useContext } from "react"

export default function NavBarADM ({NavBar}:{NavBar:boolean}){
    const { setPage } = useContext(pageContext);
    return (<>
        <nav className={!NavBar ? "pcoded-navbar":`pcoded-navbar navbar-collapsed`}>
            <div className="navbar-wrapper  ">
                <div className="navbar-content scroll-div " >
                    
                    <ul className="nav pcoded-inner-navbar ">
                        <li className="nav-item pcoded-menu-caption">
                            <label>Events</label>
                        </li>
                        <li onClick={()=> setPage("events")}  className="nav-item">
                            <span className="pcoded-micon"><i className="feather icon-align-justify"></i></span><span className="pcoded-mtext">Danh sách sự kiện</span>
                        </li>
                        <li className="nav-item pcoded-menu-caption">
                            <label>Organizers</label>
                        </li>
                        <li onClick={()=> setPage("organizers")} className="nav-item">
                            <a href="" className="nav-link "><span className="pcoded-micon"><i className="feather icon-align-justify"></i></span><span className="pcoded-mtext">Danh Sách Organizers</span></a>
                        </li>
                        <li className="nav-item pcoded-hasmenu">
                            <a href="#!" className="nav-link "><span className="pcoded-micon"><i className="feather icon-box"></i></span><span className="pcoded-mtext">Action</span></a>
                            <ul className="pcoded-submenu">
                                <li><a href="">Thêm</a></li>
                                <li><a href="">Thùng rác</a></li>
                            </ul>
                        </li>
                        <li className="nav-item pcoded-menu-caption">
                            <label>Notifications</label>
                        </li>
                        <li onClick={()=> setPage("notifications")} className="nav-item">
                            <a href="" className="nav-link "><span className="pcoded-micon"><i className="feather icon-align-justify"></i></span><span className="pcoded-mtext">Danh Sách Người Dùng</span></a>
                        </li>
                        <li className="nav-item pcoded-hasmenu">
                            <a href="#!" className="nav-link "><span className="pcoded-micon"><i className="feather icon-box"></i></span><span className="pcoded-mtext">Action</span></a>
                            <ul className="pcoded-submenu">
                                <li><a href="">Thêm</a></li>
                            </ul>
                        </li>
                        <li className="nav-item pcoded-menu-caption">
                            <label>Roles</label>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link "><span className="pcoded-micon"><i className="feather icon-align-justify"></i></span><span className="pcoded-mtext">Danh Sách Vai Trò</span></a>
                        </li>
                        <li className="nav-item pcoded-hasmenu">
                            <a href="#!" className="nav-link "><span className="pcoded-micon"><i className="feather icon-box"></i></span><span className="pcoded-mtext">Action</span></a>
                            <ul className="pcoded-submenu">
                                <li><a href="">Thêm</a></li>
                            </ul>
                        </li>
                        <li className="nav-item pcoded-menu-caption">
                            <label>Permissions</label>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link "><span className="pcoded-micon"><i className="feather icon-align-justify"></i></span><span className="pcoded-mtext">Danh Sách Quyền Lợi</span></a>
                        </li>
                        <li className="nav-item pcoded-hasmenu">
                            <a href="#!" className="nav-link "><span className="pcoded-micon"><i className="feather icon-box"></i></span><span className="pcoded-mtext">Action</span></a>
                            <ul className="pcoded-submenu">
                                <li><a href="">Thêm</a></li>
                            </ul>
                        </li>
                        <li className="nav-item pcoded-menu-caption">
                            <label>Notifications</label>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link "><span className="pcoded-micon"><i className="feather icon-align-justify"></i></span><span className="pcoded-mtext">Danh Sách Thông Báo</span></a>
                        </li>
                        <li className="nav-item pcoded-hasmenu">
                            <a href="#!" className="nav-link "><span className="pcoded-micon"><i className="feather icon-box"></i></span><span className="pcoded-mtext">Action</span></a>
                            <ul className="pcoded-submenu">
                                <li><a href="">Thùng rác</a></li>
                            </ul>
                        </li>
                        <li className="nav-item pcoded-menu-caption">
                            <label>Subscriptions Plans</label>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link "><span className="pcoded-micon"><i className="feather icon-align-justify"></i></span><span className="pcoded-mtext">Danh Sách Gói</span></a>
                        </li>
                        <li className="nav-item pcoded-hasmenu">
                            <a href="#!" className="nav-link "><span className="pcoded-micon"><i className="feather icon-box"></i></span><span className="pcoded-mtext">Action</span></a>
                            <ul className="pcoded-submenu">
                                <li><a href="">Thêm</a></li>
                            </ul>
                        </li>
                        <li className="nav-item pcoded-menu-caption">
                            <label>Subscriptions</label>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link "><span className="pcoded-micon"><i className="feather icon-align-justify"></i></span><span className="pcoded-mtext">Danh Sách Đăng Ký</span></a>
                        </li>
                        <li className="nav-item pcoded-menu-caption">
                            <label>Comments</label>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link "><span className="pcoded-micon"><i className="feather icon-align-justify"></i></span><span className="pcoded-mtext">Danh Sách Bình Luận</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}