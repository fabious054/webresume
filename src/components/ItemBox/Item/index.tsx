import styles from './Item.module.scss';
import React, { useContext } from 'react';
import { LanguageContext } from '../../../contexts';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Tag } from '../../Tag';


interface Certificate {
    id: number;
    title: string;
    description: string;
    image: string;
    hours: number;
    hoursTxt: string;
    tags: string[];
  }
interface Props {
certificates: Certificate[];
}

export const Item = (certificates:Props) => {
    const navigate = useNavigate();
    const contextLangague = useContext(LanguageContext);
    const language = contextLangague?.language || 'pt-br';
    const btnTxt = language === 'pt-br' ? 'Abrir' : 'Open';
    const btnTtle = language === 'pt-br' ? 'EM BREVE' : 'SOON';

    function goToCertificate(id:number) {
        navigate(`certificate/${id}`)
    };
    

    return (
        <>
            {certificates.certificates.map((certificate: Certificate) => (
                <div onClick={() => goToCertificate(certificate.id)}  key={certificate.id} className={styles.item}>
                    <div className={styles.itemContent}>
                        <img src={certificate.image} alt="" />
                        <div className={styles.rightDetails}><i className="bi bi-eye-fill"></i></div>
                    </div>
                    <button title={btnTtle}>
                    <span className={styles.tags}>
                        {certificate.tags.map((tag, index) => (
                            <div className={styles.tag} key={index}>
                                <Tag tag={tag} />
                            </div>
                        ))}
                    </span>
                    <span className={styles.txt}>{btnTxt} <i className="bi bi-arrow-right-circle"></i></span>   
                    </button>
                </div>
            ))}
        </>
    );
};