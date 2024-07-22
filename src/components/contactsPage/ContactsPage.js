import { ReactComponent as ImgQR} from '../../resources/img/qr.svg';
import { ReactComponent as LineContacts } from '../../resources/img/line_contacts.svg';

import './contactsPage.scss';

const ContactsPage = () => {
    return (
        <div className="contacts__page">
            <h1 className="title">Свяжитесь с нами</h1>
            <ImgQR className="qr" alt="qr-code"/><br/>
            <LineContacts className="line" alt="decoration" />
            <a href="mailto:vinogradova.jullia@yandex.ru" className="email">vinogradova.jullia@yandex.ru</a>
        </div>
    )
    
}

export default ContactsPage;