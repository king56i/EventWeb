import styles from "@css/user/components/Header/Header.module.css"
import TopBar from "./TopBar"
import NavBar from "./NavBar"
export default function Header(){
    return(
        <header className={styles.header}>
            <TopBar/>
            <NavBar/>
        </header>
    )
}