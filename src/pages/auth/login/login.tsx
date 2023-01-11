import { useEffect } from 'react';
import { authStore } from 'stores/authStore';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.scss';
import { WavyLine } from 'components/ui/decoration/wavyLine';


export const Login = observer(() => {
    const navigate = useNavigate();


    useEffect(() => {
        if (authStore.currentUser) {
            navigate('/main', { relative: 'path' });
        }
    }, [authStore.currentUser]);


    return (
        <div>
            <div className={styles.login_box}>

                <div className={styles.shadow_wrapper}>
                    <div className={styles.main_cont}>
                        <div className={styles.top_line} />
                        <button className={styles.login_button}>Log in</button>
                    </div>

                </div>

                <WavyLine style={{ transform: 'translate(-20px, -270px)' }} width={200} waveLength={35} color='#9884fb' />

                <div style={{ width: 40, height: 40, border: '1px solid black' }}>
                    <div style={{ height: 40, width: 40, background: '#f0ffb4', transform: 'translate(5px, 5px)', zIndex: -1, position: 'absolute' }} />
                </div>
            </div>

        </div>
    );
});
