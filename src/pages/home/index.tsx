import { ItemBox } from '../../components/ItemBox';
import styles from './Home.module.scss';

export const Home = () => {

    return (
        <div className={styles.container}>
            <ItemBox />
        </div>
    );
};