import Aside from '../../components/Aside';
import Footer from '../../components/Footer';
import styles from './ContentPage.module.scss';
import ButtonSetLanguage from '../../components/ButtonSetLanguage';
import { Outlet } from 'react-router-dom';

export default function ContentPage() {

    fetch('https://api.ipify.org?format=json').then(response => response.json()).then(data => console.log(data));

    return (
        <div className={styles.content}>
            <Aside />
            <ButtonSetLanguage />
            <div className={styles.content_body}>
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}