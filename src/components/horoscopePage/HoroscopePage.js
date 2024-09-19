import { useEffect, useState } from 'react';
import { ReactComponent as LineHoroscope } from '../../resources/img/line_horoscope_result.svg';
import { ReactComponent as BookHoroscope } from '../../resources/img/book_horoscope.svg';

import './horoscopePage.scss';

const HoroscopePage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [books, setBooks] = useState([]);
    const [imgStyle, setImgStyle] = useState({});
    const [showBooks, setShowBooks] = useState(false);

    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [submittedName, setSubmittedName] = useState('');
    const [submittedDate, setSubmittedDate] = useState(null);
    
    const handleSubmit = event => {
        setLoading(false);
        setError(null);
        setShowBooks(true);
        setImgStyle({'display' : 'none'});
        setSubmittedName(name);
        setSubmittedDate(dateOfBirth);

        event.preventDefault();

        if (!dateOfBirth) {
            setError('Пожалуйста, выберите дату рождения.');
            return;
        }
    }

    useEffect (() => {
            const loadBooks = async() => {
                if (submittedDate) {
                    try {
                        setLoading(true);
                        const module = await import('../../resources/facts/birth_books.json');
                        const yearOfBirth = submittedDate.substr(0, 4);
                        setBooks(module.default[yearOfBirth]);
                    } catch (error) {
                        console.error('Error loading books:', error);
                        setError('Error loading books.');
                        setBooks([]);
                    } finally {
                        setLoading(false);
                    }
            };
        }
        loadBooks();
    }, [submittedDate]);

    return (
        <div className='horoscope_page'>
            <h1 className='title'>Книжный гороскоп</h1>
            <form onSubmit={handleSubmit}>
                <p className='horoscope_hint'>Введите <span className='text_highlighting hint'>имя</span> и <span className='text_highlighting hint'>дату рождения</span></p>
                <input 
                    onChange={event => setName(event.target.value)}
                    name="name" 
                    id="name" 
                    type="text" 
                    placeholder="Ваше имя..." /><br/>
                <input 
                    onChange={event => setDateOfBirth(event.target.value)}
                    name="age" 
                    id="age" 
                    type="date" 
                    min="1960-01-01" 
                    max="2024-01-01" /><br/>
                <button className="button" type="submit">Предсказать</button>
            </form>
            <br/>
            {loading ? (
                <p className="loading_message">Загрузка...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                showBooks && (
                    <>
                        <p className='greeting'>{submittedName}, Вам подойдут эти <span className='text_highlighting greeting'>книги:</span></p>
                        <ul className='predicted_book'>
                            {books.map((book, index) => (
                                <li key={index}>
                                    <p className="predicted_book">Название произведения: <span className='text_highlighting greeting'>{book.title}</span><br/>
                                    Автор: <span className='text_highlighting greeting'>{book.author}</span></p>
                                </li>
                            ))}
                        </ul>
                    </>
                )
            )}
            <LineHoroscope className='line_horoscope'/>
            <BookHoroscope className='book_img' style={imgStyle}/>
        </div>
    )
}

export default HoroscopePage;