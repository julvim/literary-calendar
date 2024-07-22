import { useState, useEffect } from 'react';
import { ReactComponent as Clouds } from '../../resources/img/clouds.svg';

import './monthFacts.scss';

const MonthFacts = ({month, onBack}) => {
    const [facts, setFacts] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadFacts = async () => {
          try {
            setLoading(true);
            const module = await import(`../../resources/facts/${month}.json`);
            setFacts(module.default);
          } catch (error) {
            console.error('Error loading facts:', error);
            setError('Error loading facts.');
          } finally {
            setLoading(false);
          }
        };
    
        loadFacts();
    }, [month]);

    return (
        <div className="month__facts">
            <h1 className="title">{month}</h1>
            <Clouds className="decoration"/>

            {loading ? (<p className="loading_message">Загрузка...</p>) : error ? (<p>{error}</p>) : (
                <ul className="facts_list">
                    {Object.keys(facts).map((year) => (
                        <li key={year} className="fact_item">
                            <span className="year_fact">{year}</span> {facts[year]}
                        </li>
                    ))}
                </ul>
            )}
            
            <button onClick={onBack} className="button">Назад</button>
        </div>
    )
}

export default MonthFacts;