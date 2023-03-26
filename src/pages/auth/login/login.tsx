import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate } from 'react-router-dom';

import { authStore } from 'stores/authStore';

import { Wrapper3d, Pattern, TitleBar } from 'components/ui/decoration';
import { Button, Input, Checkbox } from 'components/ui/form';
import { UserIcon, LockIcon, LoadingIcon } from 'components/ui/icons';

import { MonkeyHead } from '../monkeyHead';

import styles from './login.module.scss';
import { loginStore } from './loginStore';




export const Login = observer(() => {
    const navigate = useNavigate();

    const [eyesClosed, setEyesClosed] = useState(false); // for the monkey head
    const [errors, setErrors] = useState<Record<string, string[]>>({
        username: [],
        password: [],
    });



    const updateErrors = (field: string, errors: string[]) => {
        setErrors(prev => {
            return { ...prev, [field]: errors };
        });
    };

    const onSignInClick = () => {
        loginStore.logInUser();
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
                    <TitleBar className={styles.top_bar} />

                    <MonkeyHead eyesClosed={!eyesClosed} />

                    <Input
                        value={loginStore.login}
                        onChange={e => loginStore.setLogin(e.target.value)}

                        onFocus={() => setEyesClosed(true)}
                        onBlur={() => setEyesClosed(false)}
                        onErrorsChange={(errs) => updateErrors('username', errs)}

                        required
                        prefixIcon={<UserIcon />}
                        placeholder='username'
                    />

                    <Input
                        value={loginStore.password}
                        onChange={e => loginStore.setPassword(e.target.value)}

                        onFocus={() => setEyesClosed(true)}
                        onBlur={() => setEyesClosed(false)}
                        onErrorsChange={(errs) => updateErrors('password', errs)}

                        required
                        prefixIcon={<LockIcon />}
                        placeholder='password'
                        type='password'
                    />

                    <div className={styles.help_block}>
                        <div>
                            <Checkbox /> remember me
                        </div>

                        <div>
                            <a href=''>forgot password?</a>
                        </div>
                    </div>

                    <Button
                        style={{ width: '100%', height: 50 }}
                        onClick={onSignInClick}
                        disabled={loginStore.isLoggingIn || !!Object.values(errors).filter(errs => errs.length).length}
                        shining
                    >
                        {loginStore.isLoggingIn ? <LoadingIcon /> : 'SIGN IN'}
                    </Button>

                    <div className={styles.register}>
                        {'Don\'t have an account?'} <Link to={'/register'}>Register now</Link>
                    </div>
                </div>
            </Wrapper3d>
        </div>
    );
});
