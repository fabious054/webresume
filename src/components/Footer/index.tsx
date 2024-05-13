import style from './Footer.module.scss';
import { LanguageContext } from '../../contexts';
import React, { useContext } from 'react';
import personalInfos from '../../data/personalInfos';

import logo from '../../assets/img/logos/linkedin.png';
import github from '../../assets/img/logos/github.png';
import gmail from '../../assets/img/logos/gmail.png';
import instagram from '../../assets/img/logos/instagram.png';

export default function Footer() {
    const contextLangague = useContext(LanguageContext);
    const language = contextLangague?.language || 'pt-br';
    const infoJson = personalInfos(language);

    // const txt = '© 2024 Fabio Abreu';
    const txt = language === 'pt-br' ? `© 2024 Desenvolvido por ${infoJson.name}` : '© 2024 Developed by Fabio Abreu';

    function openLink(link: string) {
        window.open(link, '_blank');
    }

    return (
        <footer className={style.footer}>
            <div className={style.footer__logos}>
                <div onClick={()=>openLink('https://www.linkedin.com/in/fabio-abreu-544a78221/')} title='Linkedin' className={style.logo}>
                    <img src={logo} alt="" />
                </div>
                <div onClick={()=>openLink('https://github.com/fabious054')} title='GitHub' className={style.logo}>
                    <img src={github} alt="" />
                </div>
                <div onClick={()=> openLink('mailto:fabio.h.abreu99@gmail.com')} title='Gmail' className={style.logo}>
                    <img src={gmail} alt="" />
                </div>
                <div onClick={()=> openLink('https://www.linkedin.com/in/fabio-abreu-544a78221/')} title='Instagram' className={style.logo}>
                    <img src={instagram} alt="" />
                </div>
            </div>
            <div className={style.footer__text}>
                <p>{txt}</p>
            </div>
        </footer>
    );
}