import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import logo from '../../resources/img/logo.svg';
import './appHeader.scss'

const AppHeader = () => {
    const location = useLocation();
    const [selectedPage, setSelectedPage] = useState('');

    useEffect(() => {
        const currentPage = location.pathname;

        if (currentPage.includes('/main_page')) {
            setSelectedPage('main_page');
        } else if (currentPage.includes('/contacts')) {
            setSelectedPage('contacts_page');
        } else if (currentPage.includes('/months')) {
            setSelectedPage('months_page');
        } else if (currentPage.includes('/horoscope')) {
            setSelectedPage('horoscope_page');
        } else if (currentPage.includes('/month_facts')) {
            setSelectedPage('months_page');
        }
    }, [location.pathname])

    return (
        <header className="app__header">
            <img src={logo} alt="LC" id="logo"/>
            <nav className="app__menu">
                <ul>
                    <li className={selectedPage === 'main_page' ? 'page_selected' : ''}>
                        <Link to="/main_page" id="main_page">Главная</Link>
                    </li>
                    <li className={selectedPage === 'months_page' ? 'page_selected' : ''}>
                        <Link to="/months" id="months_page">Месяц</Link>
                    </li>
                    <li className={selectedPage === 'contacts_page' ? 'page_selected' : ''}>
                        <Link to="/contacts" id="contacts_page">Контакты</Link>
                    </li>
                    <li className={selectedPage === 'horoscope_page' ? 'page_selected' : ''}>
                        <Link to="/horoscope" id="horoscope_page">Книжный гороскоп</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;