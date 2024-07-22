import { useState } from "react";
import MonthFacts from "../monthFacts/MonthFacts";

import './monthsPage.scss';

const MonthsPage = () => {
    const [currentMonth, setCurrentMonth] = useState('');
    const [showMonthFacts, setShowMonthFacts] = useState(false);

    const handleMonthClick = (month) => {
        setCurrentMonth(month);
        setShowMonthFacts(true);
    }

    const handleBackToList = () => {
        setCurrentMonth('');
        setShowMonthFacts(false);
    }

    return (
        <div className="months__page">
            {!showMonthFacts ? (
                <>
                    <h1 className="title">Выберите месяц</h1>
                    <button onClick={() => handleMonthClick('January')} className="button">Январь</button>
                    <button onClick={() => handleMonthClick('February')} className="button">Февраль</button>
                    <button onClick={() => handleMonthClick('March')} className="button">Март</button>
                    <button onClick={() => handleMonthClick('April')} className="button">Апрель</button>
                    <button onClick={() => handleMonthClick('May')} className="button">Май</button>
                    <button onClick={() => handleMonthClick('June')} className="button">Июнь</button>
                    <button onClick={() => handleMonthClick('July')} className="button">Июль</button>
                    <button onClick={() => handleMonthClick('August')} className="button">Август</button>
                    <button onClick={() => handleMonthClick('September')} className="button">Сентябрь</button>
                    <button onClick={() => handleMonthClick('October')} className="button">Октябрь</button>
                    <button onClick={() => handleMonthClick('November')} className="button">Ноябрь</button>
                    <button onClick={() => handleMonthClick('December')} className="button">Декабрь</button>
                </>
            ) : (
                <MonthFacts month={currentMonth} onBack={handleBackToList} />
            )}
        </div>
    );
};

export default MonthsPage;