import styles from './ButtonSetLanguage.module.scss';
import brazilFlag from '../../assets/img/countryFlags/brazil-flag.png';
import euaFlag from '../../assets/img/countryFlags/eua-flag.png';
import { LanguageContext } from '../../contexts';
import { useContext } from 'react';

export default function ButtonSetLanguage() {
    const contextLangague = useContext(LanguageContext);
    const language = contextLangague?.language;

    function changeLanguage(language: string) {
        contextLangague?.setLanguage(language);
    };

    return (
        <div className={styles.buttonSetLanguage}>
            <div title='Pt-br' onClick={() => changeLanguage('pt-br')} className={styles.flag__button}>
                <img src={brazilFlag} className={language == 'pt-br' ? styles.active : ''} alt="Brazil Flag" />
            </div>
            <div title='EN' onClick={() => changeLanguage('en')} className={styles.flag__button}>
                <img src={euaFlag} className={language == 'en' ? styles.active : ''} alt="Eua Flag" />
            </div>
        </div>
    );
}