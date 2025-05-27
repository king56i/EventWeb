import { Outlet } from "react-router-dom";
import Header from "../components/user/Header/Header";
import Footer from "../components/user/Footer/Footer";

export default function UserTemplate(){
    return <>
    <Header/>
        <Outlet/>
    <Footer/>
    </>
}