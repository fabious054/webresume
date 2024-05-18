import {Item} from './Item';
import styles from './ItemBox.module.scss';
import React, { useContext,useState } from 'react';
import { LanguageContext } from '../../contexts';
import Certificates from '../../data/certificates';
import SelectInfo from '../../data/SelectInfo';
import Select from '../Select';



export const ItemBox = () => {
    const contextLangague = useContext(LanguageContext);
    const language = contextLangague?.language || 'pt-br';
    const certificates = Certificates(language);
    
    let arrayCertificates = certificates.certificates;
    const options = SelectInfo();

    const [selectedTag, setSelectedTag] = useState('');

    const changeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = options.find((option) => option.value === event.target.value);
        setSelectedTag(selected?.value || '');
      };

      if(selectedTag !== '') {
        arrayCertificates = arrayCertificates.filter((certificate) => certificate.tags.includes(selectedTag));        
      }
    
    return (
        <div className={styles.box}>
            <div className={styles.header__itemBox}>
                <h3 className={styles.box__title}>{certificates.title}</h3>
                <Select onChange={changeOption} options={options} />
            </div>
            <div className={styles.box__content}>
                <Item certificates={arrayCertificates} />
            </div>
        </div>
    );
};