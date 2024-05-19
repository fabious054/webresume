import styles from './Admin.module.scss';
import { LogadoContext } from '../../contexts';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../Login';

export default function Admin() {
    const navigate = useNavigate();
    const logado = useContext(LogadoContext);
    console.log(logado);
    
    if (logado?.logado) {
        return (
            <div className={styles.content}>
                <h1>Admin</h1>
            </div>
        ); 
    }

    return(
        <Login />
    );
    
}