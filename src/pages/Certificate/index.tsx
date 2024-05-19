import styles from './Certificate.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useContext,useState } from 'react';
import { LanguageContext } from '../../contexts';
import Certificates from '../../data/certificates';
import { Tag } from '../../components/Tag';

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
    const navigate = useNavigate();

    const contextLangague = useContext(LanguageContext);
    const language = contextLangague?.language || 'pt-br';
    const certificates = Certificates(language);
    const certificate = certificates.certificates.find((certificate: Certificate) => certificate.id === Number(id));

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <button onClick={() => navigate('/')}>
                    <i className="bi bi-arrow-left-circle"></i> {language === 'pt-br' ? 'Voltar' : 'Back'}
                </button>
            </div>
            <div className={styles.content_box}>
                <div className={styles.certificate__img_box}>
                    <img src={certificate?.image} alt="" />
                </div>
                <div className={styles.certificate__info_box}>
                    <div className={styles.certificate__info_box__content}>
                        <div className={styles.description}>
                            <h2>{certificate?.title}</h2>
                            <span>{certificate?.description}</span>
                        </div>
                        <div className={styles.tags}>
                            {certificate?.tags.map(tag => (
                                <Tag tag={tag} />
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div className={styles.certificate__title_box}>
                    <h2>{certificate?.title}</h2>
                </div> */}
            </div>
            
        </div>
    );
}