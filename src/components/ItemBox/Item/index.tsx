import styles from './Item.module.scss';
import React, { useContext } from 'react';
import { LanguageContext } from '../../../contexts';
import { useNavigate } from 'react-router-dom';

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
    const btnTxt = language === 'pt-br' ? 'DETALHES' : 'DETAILS';

    const btnTtle = language === 'pt-br' ? 'EM BREVE' : 'SOON';

    function goToCertificate(id:number) {
        navigate(`certificate/${id}`)
    };

    return (
        <>
            {certificates.certificates.map((certificate: Certificate) => (
                <div onClick={() => goToCertificate(certificate.id)}  key={certificate.id} className={styles.item}>
                    <img src={certificate.image} alt="" />
                    <button title={btnTtle}>{btnTxt}</button>
                </div>
            ))}
        </>
    );
};