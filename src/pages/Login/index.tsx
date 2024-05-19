import styles from './Login.module.scss';
import { useContext, useState } from 'react';
import { LogadoContext } from '../../contexts';


export default function Login() {
    const logado = useContext(LogadoContext);
    const [user, setUser] = useState({email: '', password: ''});

    console.log(process.env.USER);
    
    
    return (
        <div className={styles.content}>
            <h1>Login</h1>
        </div>
    );
}