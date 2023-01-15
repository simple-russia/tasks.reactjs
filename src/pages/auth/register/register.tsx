import { authStore } from 'stores/authStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import styles from './register.module.scss';
import { TitleBar, Wrapper3d } from 'components/ui/decoration';


export const Register = observer(() => {
    const navigate = useNavigate();


    useEffect(() => {
        if (authStore.currentUser) {
            navigate('/main', { relative: 'path' });
        }
    }, [authStore.currentUser]);


    return (
        <div className={styles.register_page_cont}>
            <Wrapper3d className={styles.register_wrapper} offset={12} lineWidth={1}>
                <div className={styles.register_box}>
                    <TitleBar className={styles.top_bar} />
                    <div className={styles.image_box}></div>
                    <div className={styles.form_box}>
                        <div style={{ height: '100%', width: '100%', background: '#FFF' }}></div>
                    </div>
                </div>
            </Wrapper3d>
        </div>
    );
});
