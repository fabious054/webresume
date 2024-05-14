import React, { useContext } from 'react';

import styles from './Aside.module.scss';
import photo from '../../assets/img/my-photo.png';
import Separator from '../Separator';
import { LanguageContext } from '../../contexts';
import personalInfos from '../../data/personalInfos';
import personalSkills from '../../data/skillsInfo';
import Skills from '../Skills';


export default function Aside() {
    
    const contextLangague = useContext(LanguageContext);
    const language = contextLangague?.language || 'pt-br';
    const infoJson = personalInfos(language);
    const infoSkill = personalSkills(language);
    
    return (
        <aside className={styles.aside}>
            <div className={styles.photo__box}>
                <img src={photo} alt="" />
            </div>
            <h2 className={styles.name}>{infoJson.name} - {infoJson.age}</h2>
            <p className={styles.addres}>{infoJson.city} <br /> {infoJson.state} - {infoJson.country} </p>
            <Separator />
            <Skills {...infoSkill} />
        </aside>
    );
}