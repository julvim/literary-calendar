import { Link } from "react-router-dom";

import { ReactComponent as LineMain } from '../../resources/img/line_main_page.svg';
import { ReactComponent as BooksPicture } from '../../resources/img/books.svg';
import { ReactComponent as LineSelection } from '../../resources/img/line_horoscope.svg';

import './mainPage.scss';
import '../../style/button.scss';

const MainPage = () => {
    return (
        <div className="main">
            <div className="main__information">
                <h1 className="title">The literary calendar</h1>
                <p>Окунитесь в прошлое с <br/>«Литературным Календарем», <br/>где каждый день наполнен <br/>историей и вдохновением</p>
                <Link to="/months" className="button">Выбрать месяц</Link>
                <LineMain className="line" alt="decoration" />
                <BooksPicture className="books" alt="books" />
            </div>

            <div className="main__idea">
                <h1 className="title">В чем заключается идея?</h1>
                <p>«Литературный Календарь» - это <span className="text_highlighting">интерактивный календарь</span>, посвященный событиям и памятным датам в мире литературы и языкознания. 
                Каждая страница сайта представляет собой месяц календаря, на котором отображаются важные события, дни рождения знаменитых писателей и филологов, а также другие занимательные факты.</p>
            </div>

            <div className="book__selection">
                <span>Подбор <span className="text_highlighting">книги</span> по дате рождения!</span>
                <LineSelection className="line" alt="decoration" /> <br/>
                <Link to="/horoscope" className="button">Подобрать книгу</Link>
            </div>
        </div>
    )
    
}

export default MainPage;