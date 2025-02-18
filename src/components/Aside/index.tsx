import React, { useContext } from 'react';

import styles from './Aside.module.scss';
import photo from '../../assets/img/my-photo.png';
import Separator from '../Separator';
import { LanguageContext } from '../../contexts';
import personalInfos from '../../data/personalInfos';
import personalSkills from '../../data/skillsInfo';
import Skills from '../Skills';
import { InfoDiv } from '../InfoDiv';


export default function Aside() {
    
    const contextLangague = useContext(LanguageContext);
    const language = contextLangague?.language || 'pt-br';
    const infoJson = personalInfos(language);
    const infoSkill = personalSkills(language);

    function calcAge(birthDate: string) {
        const date = new Date(birthDate);
        const diff = Date.now() - date.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    const calculatedAge = calcAge(infoJson.age).toString();
    const stringOfAge = `${calculatedAge} ${(language === 'pt-br') ? 'anos' : 'years old'} `;
    
    return (
        <aside className={styles.aside}>
            <div className={styles.photo__box}>
                <img src={photo} alt="" />
            </div>
            <h2 className={styles.name}>{infoJson.name}</h2>
            <h5 className={styles.age} >{stringOfAge}</h5>
            <p className={styles.addres}>{infoJson.city} <br /> {infoJson.state} - {infoJson.country} </p>
            <InfoDiv type={'hours'} />
            <InfoDiv type={'experience'} />
            <Separator />
            <Skills {...infoSkill} />
        </aside>
    );
}