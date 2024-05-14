import styles from './Select.module.scss';
import { LanguageContext } from '../../contexts';
import React, { useContext } from 'react';

interface OptionProps {
    id: number;
    value: string;
    title: string;
}

interface SelectProps {
    options: OptionProps[];
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select( { options, onChange } : SelectProps) {
    const contextLangague = useContext(LanguageContext);
    const language = contextLangague?.language || 'pt-br';

    return (
        <select onChange={onChange} className={styles.select}>
            <option value="">{language == 'pt-br' ? 'Todos' : 'All' }</option>
            {options.map((option) => (
                <option key={option.id} value={option.value}>{option.title}</option>
            ))}
        </select>
    );
}