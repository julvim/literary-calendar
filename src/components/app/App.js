import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import MainPage from '../mainPage/MainPage';
import MonthsPage from '../monthsPage/MonthsPage';
import ContactsPage from '../contactsPage/ContactsPage';
import HoroscopePage from '../horoscopePage/HoroscopePage';
import MonthFacts from '../monthFacts/MonthFacts';

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader/>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/main_page" />} />
            <Route path='/main_page' element={<MainPage />} />
            <Route path='/months' element={<MonthsPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/horoscope' element={<HoroscopePage />} />
            <Route path='/facts' element={<MonthFacts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
