import styles from './infoDiv.module.scss';
import {TotalHours} from '../../data/certificates';
import { LanguageContext } from '../../contexts';
import{ useContext } from 'react';
import PersonalInfos from '../../data/personalInfos';

interface InfoDivProps {
    type: string;
};

export const InfoDiv = ({type}:InfoDivProps) => {
    const contextLangague = useContext(LanguageContext);
    if (type === 'hours') {
        const hours = TotalHours(contextLangague?.language || 'pt-br');
        
        return (
            <div className={styles.container}>
                <p>
                    {contextLangague?.language === 'pt-br' ? `+ de ${hours} horas de estudo` : `+ than ${hours} study hours`}
                </p>
            </div>
        ); 
    }else if (type === 'experience'){
        const infoJson = PersonalInfos(contextLangague?.language || 'pt-br');
        const startYear = infoJson.startYear;
        const currentYear = new Date().getFullYear();
        const experience = currentYear - startYear;
        return (
            <div className={styles.container}>
                <p>
                    {contextLangague?.language === 'pt-br' ? `+ de ${experience} anos de experiência profissinal` : `+ of ${experience} years of professional experience`}
                </p>
            </div>
        );
    }else{
        return (
            <div className={styles.container}>
                <p>Erro</p>
            </div>
        );
    }

};