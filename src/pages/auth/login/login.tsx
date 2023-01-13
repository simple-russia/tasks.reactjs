import { useEffect } from 'react';
import { authStore } from 'stores/authStore';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.scss';
import { Pattern } from 'components/ui/decoration/circlePattern';
import { Wrapper3d } from 'components/ui/decoration/wrapper3d';
import { OffsetFigure } from 'components/ui/decoration/offsetFigure';
import { Button } from 'components/ui/form/button';
import { Input } from 'components/ui/form/input';


export const Login = observer(() => {
    const navigate = useNavigate();


    useEffect(() => {
        if (authStore.currentUser) {
            navigate('/main', { relative: 'path' });
        }
    }, [authStore.currentUser]);


    return (
        <div className={styles.login_page_cont}>
            <Wrapper3d className={styles.login_wrapper} offset={12} lineWidth={1}>
                <Pattern height={100} width={100} type='circle' color='#123456' styles={{ position: 'absolute', left: -55, top: 140 }} />
                {/* <OffsetFigure height={30} width={30} /> */}
                <div className={styles.login_box}>
                    <h1 style={{ marginBottom: '10px' }}>Log in</h1>
                    <Input placeholder='username' />
                    <Input placeholder='password' type='password' />
                    <Button style={{ width: '100%', height: 50 }}>SIGN IN</Button>

                </div>
            </Wrapper3d>
        </div>
    );
});
