import Link from "next/link"

import styles from '../../styles/Navbar.module.css'

export default function () {
    return (
        <nav className={styles.navbar}>
            <Link href="/"></Link>
            <ul className={styles.lista}>
                <li className={styles.item}>
                    <Link href={"/"}>
                        Home
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href={"/Aplicativo"}>
                        APP
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href={"/Sobre"}>
                        Sobre
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
