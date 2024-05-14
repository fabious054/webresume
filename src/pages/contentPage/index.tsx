import Aside from '../../components/Aside';
import Footer from '../../components/Footer';
import styles from './ContentPage.module.scss';
import { Outlet } from 'react-router-dom';

export default function ContentPage() {
    return (
        <div className={styles.content}>
            <Outlet />
            <Footer />
        </div>
    );
}