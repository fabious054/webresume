import styles from './Certificate.module.scss';
import { useParams } from 'react-router-dom';
import React, { useContext,useState } from 'react';
import { LanguageContext } from '../../contexts';
import Certificates from '../../data/certificates';

interface Certificate {
    id: number;
    title: string;
    description: string;
    image: string;
    hours: number;
    hoursTxt: string;
    tags: string[];
}

export default function Certificate() {
    const {id} = useParams();

    const contextLangague = useContext(LanguageContext);
    const language = contextLangague?.language || 'pt-br';
    const certificates = Certificates(language);
    const certificate = certificates.certificates.find((certificate: Certificate) => certificate.id === Number(id));

    console.log(language);

    return(
        <div className={styles.container}>
            <div className={styles.content_box}>
                <div className={styles.certificate__img_box}>
                    <img src={certificate?.image} alt="" />
                </div>
                <div className={styles.certificate__info_box}>
                    <div className={styles.certificate__info_box__content}>
                        <div className={styles.description}>
                            <span>{certificate?.description}</span>
                        </div>
                        <div className={styles.tags}>
                            b
                        </div>
                    </div>
                </div>
                <div className={styles.certificate__title_box}>
                    <h2>{certificate?.title}</h2>
                </div>
            </div>
            
        </div>
    );
}