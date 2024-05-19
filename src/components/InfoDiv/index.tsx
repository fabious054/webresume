import styles from './infoDiv.module.scss';
import {TotalHours} from '../../data/certificates';
import { LanguageContext } from '../../contexts';
import{ useContext } from 'react';

export const InfoDiv = () => {
    const contextLangague = useContext(LanguageContext);
    const hours = TotalHours(contextLangague?.language || 'pt-br');
    console.log(hours);
    
    
    
  return (
    <div className={styles.container}>
      <p>
        {contextLangague?.language === 'pt-br' ? `Mais de ${hours} horas de estudo` : `More than ${hours} study hours`}
      </p>
    </div>
  );
};