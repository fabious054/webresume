import Aside from '../../components/Aside';
import styles from './Home.module.scss';
import { LanguageContext } from '../../contexts';
import { useContext } from 'react';

export const Home = () => {
    const langague = useContext(LanguageContext);

    return (
        <div className='container'>
            <h1>Home</h1>
            <button onClick={()=>langague?.setLanguage('pt-br')}>{langague?.language}</button>
        </div>
    );
};