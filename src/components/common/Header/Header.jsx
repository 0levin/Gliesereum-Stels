import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { Text, textTypes } from '../../shared/Text/Text';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import tgIcon from "../assets/Telegram_white.svg";
import ghIcon from "../assets/Github_white.svg";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { pathname } = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <header className={classNames([styles.header])}>
            <nav className={classNames("container", styles.content)}>
                <div className={styles.part}>
                    <Link to="/" className={classNames([styles.logo, "hover"])}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <ul className={styles.links_list}>
                        <li className={classNames([styles.nav_link, "hover"])}>
                            <Link to="/market" >
                                <Text data={[{ text: "Market challenges" }]} type={textTypes.regular} />
                            </Link>
                        </li>
                        <li className={classNames([styles.nav_link, "hover"])}>
                            <Link to="/about" >
                                <Text data={[{ text: "About us" }]} type={textTypes.regular} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.part}>
                    <ul className={styles.links_list}>
                        <li>
                            <Link className={classNames([styles.social_link, "hover"])}>
                                <img src={ghIcon} alt="GitHub" />
                            </Link>
                        </li>
                        <li>
                            <Link className={classNames([styles.social_link, "hover"])}>
                                <img src={tgIcon} alt="Telegram" />
                            </Link>
                        </li>
                        {
                            window.innerWidth < 768 &&
                            <li>
                                <div onClick={() => setMenuOpen(!menuOpen)} className={classNames([styles.menu_btn])} >
                                    <img src={menuOpen ? closeIcon : menuIcon} alt="" />
                                </div>
                                <div className={classNames([styles.menu, menuOpen && styles.menu_open])}>
                                    <ul className={styles.menu_list}>
                                        <li className={classNames([styles.menu_item])}>
                                            <Link to="/market" >
                                                <Text data={[{ text: "Market challenges" }]} type={textTypes.regular} />
                                            </Link>
                                        </li>
                                        <li className={classNames([styles.menu_item])}>
                                            <Link to="/about" >
                                                <Text data={[{ text: "About us" }]} type={textTypes.regular} />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}