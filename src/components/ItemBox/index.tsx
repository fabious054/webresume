import {Item} from './Item';
import styles from './ItemBox.module.scss';
import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts';
import Certificates from '../../data/certificates';



export const ItemBox = () => {
    const contextLangague = useContext(LanguageContext);
    const language = contextLangague?.language || 'pt-br';
    const certificates = Certificates(language);
    
    const arrayCertificates = certificates.certificates;

    return (
        <div className={styles.box}>
            <h3 className={styles.box__title}>{certificates.title} :</h3>
            <div className={styles.box__content}>
                <Item certificates={arrayCertificates} />
            </div>
        </div>
    );
};