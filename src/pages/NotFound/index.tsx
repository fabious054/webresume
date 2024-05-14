import styles from './NotFound.module.scss';
import { LanguageContext } from '../../contexts';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    const contextLangague = useContext(LanguageContext);
    const language = contextLangague?.language || 'pt-br';

    const txt = language === 'pt-br' ? 'Página não encontrada : (' : 'Page not found : (';
    const btnTxt = language === 'pt-br' ? 'Voltar' : 'Back';

    return (
        <div className={styles.container}>
            <h1>404</h1>
            <h2>{txt}</h2>
            <button onClick={() => navigate(-1)}>{btnTxt}</button>
        </div>
    );
}