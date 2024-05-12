import React, { useContext, useEffect } from 'react';

import styles from './Aside.module.scss';
import photo from '../../assets/img/my-photo.png';
import Separator from '../Separator';
import { LanguageContext } from '../../contexts';

export default function Aside() {
    const langague = useContext(LanguageContext);
    
    return (
        <aside className={styles.aside}>
            <div className={styles.photo__box}>
                <img src={photo} alt="" />
            </div>
            <h2 className={styles.name}>Fabio Abreu (24 anos) {langague?.language}</h2>
            <p className={styles.addres}>Caxias do sul <br /> Rio Grande do Sul - Brasil </p>
            <Separator />
        </aside>
    );
}