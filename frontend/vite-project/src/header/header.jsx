import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';
import kont from '../assets/kont.png';
import kart from '../assets/kart.png';
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentCity, setCurrentCity] = useState('Нижний Новгород');

    const cities = ['Нижний Новгород', 'Москва', 'Санкт-Петербург', 'Казань'];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleCitySelect = (city) => {
        setCurrentCity(city);
        setIsOpen(false);
    };

    return (
        <header>
            <div className={styles.header}>
                <div className={styles.leftSection}>
                    <NavLink to="/" className={styles.logo}>
                        <img src={logo} alt="Future Academy" className={styles.logo} />
                    </NavLink>
                   
                    <nav className={styles.navigation}>
                        <NavLink to="/courses" className={styles.navLink}>
                            <span className={styles.burgerIcon}>
                                <img src={menu} />
                            </span>
                            Все курсы
                        </NavLink>
                        <NavLink to="/event" className={styles.navLink}>
                            Мероприятия
                        </NavLink>
                        <NavLink to="/news" className={styles.navLink}>
                            Базы знаний
                        </NavLink>
                        <NavLink to="/carPage" className={styles.navLink}>
                            Карьера
                        </NavLink>
                    </nav>
                </div>

                <div className={styles.rightSection}>
                    <div className={styles.locationContainer}>
                        <button className={styles.locationSelector} onClick={toggleDropdown}>
                            <span className={styles.geoIcon}>
                                <img src={kart} />
                            </span>
                            {currentCity}
                            <span
                                className={`${styles.arrowIcon} ${isOpen ? styles.arrowOpen : ''}`}
                            ></span>
                        </button>

                        {isOpen && (
                            <ul className={styles.dropdownList}>
                                {cities.map((city) => (
                                    <li key={city} className={styles.dropdownItem}>
                                        <button
                                            className={styles.cityButton}
                                            onClick={() => handleCitySelect(city)}
                                        >
                                            {city}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <NavLink to="/contact" className={styles.phoneLink}>
                        8 800 950-33-98
                    </NavLink>
                    
                    <NavLink to="/auth" className={styles.loginLink}>
                        <span className={styles.userIcon}>
                            <img src={kont} />
                        </span>
                        Войти
                    </NavLink>
                </div>
            </div>
        </header>
    );
}
