import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import { authStore } from 'stores/authStore';

import { Wrapper3d, Pattern } from 'components/ui/decoration';
import { Button, Input } from 'components/ui/form';
import { UserIcon, LockIcon } from 'components/ui/icons';

import styles from './login.module.scss';



export const Login = observer(() => {
    const navigate = useNavigate();

    const [isFetching, setIsFetching] = useState(false);

    const onBtnClick = () => {
        setIsFetching(true);
        setTimeout(() => setIsFetching(false), 2000);
    };


    useEffect(() => {
        if (authStore.currentUser) {
            navigate('/main', { relative: 'path' });
        }
    }, [authStore.currentUser]);


    return (
        <div className={styles.login_page_cont}>
            <Wrapper3d className={styles.login_wrapper} offset={12} lineWidth={1}>
                <Pattern height={100} width={100} type='circle' color='#123456' styles={{ position: 'absolute', left: -55, top: 140 }} />

                <div className={styles.login_box}>
                    <h1 style={{ marginBottom: '10px', position: 'relative' }}>Log in</h1>
                    <Input prefixIcon={<UserIcon />} placeholder='username' />
                    <Input prefixIcon={<LockIcon />} placeholder='password' type='password' />
                    <Button
                        style={{ width: '100%', height: 50 }}
                        onClick={onBtnClick}
                        disabled={isFetching}
                    >
                        {isFetching ? '()' : 'SIGN IN'}
                    </Button>
                </div>
            </Wrapper3d>
        </div>
    );
});
