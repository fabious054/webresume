import styles from './Login.module.scss';
import { useContext, useEffect, useState } from 'react';
import { LogadoContext } from '../../contexts';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const logado = useContext(LogadoContext);
    const [error, setError] = useState(false); // [1
    const [user, setUser] = useState({user: '', password: ''});
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('USER_WEBRESUME');
        if(user) {
            setUser(JSON.parse(user));
        }
    }, [logado, navigate]);

    function verifyLogin() {
        if(user.user === process.env.REACT_APP_USER && user.password === process.env.REACT_APP_PASSWORD) {
            //salvar no localstorage
            localStorage.setItem('USER_WEBRESUME', JSON.stringify(user));
            logado?.setLogado(true);
            navigate('/admin');

        } else {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);
            
        }
        
    }
    
    
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Login</h1>
                {error && <p className={styles.error}>Usuário ou senha inválidos</p>}
                <input type="text" placeholder="User" value={user.user} onChange={(e) => setUser({...user, user: e.target.value})} />
                <input type="password" placeholder="Password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} />
                <button onClick={()=>{verifyLogin()}}>Logar</button>
            </div>
        </div>
    );
}