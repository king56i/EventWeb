import "@css/admin/all.min.css"
import "@css/admin/template/styles.css"
import "@scss/admin/template/mo.scss"
import HeaderADM from "@components/admin/Header/HeaderADM";
import NavBarADM from "@components/admin/Header/NavBarADM";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { ManageProvider } from "@src/context/ManageContext";
export default function AdminTemplate(){
    const [loading, setLoading] = useState(true);
    const [NavBar,setNavBar] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000); 
    }, []);
    return <>
    {loading &&
    <div className="loader-bg">
		<div className="loader-track">
			<div className="loader-fill"></div>
		</div>
	</div>
    }
    <HeaderADM NavBar={NavBar} setNavBar={setNavBar}/>
    <NavBarADM NavBar={NavBar} />
    <main>
        <div className="pcoded-main-container">
            <div className="pcoded-content">
                <ManageProvider>
                    <Outlet/>
                </ManageProvider>
            </div>
        </div>
    </main>
    </>
}