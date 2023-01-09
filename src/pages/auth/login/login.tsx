import { useEffect } from 'react';
import { authStore } from 'stores/authStore';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.scss';



export const Login = observer(() => {
    const navigate = useNavigate();


    useEffect(() => {
        if (authStore.currentUser) {
            navigate('/main', { relative: 'path' });
        }
    }, [authStore.currentUser]);


    return (
        <div>
            <div className={styles.login_box}></div>
        </div>
    );
});
