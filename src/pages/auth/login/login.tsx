import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate } from 'react-router-dom';

import { authStore } from 'stores/authStore';

import { Wrapper3d, Pattern, TitleBar } from 'components/ui/decoration';
import { Button, Input, Checkbox } from 'components/ui/form';
import { UserIcon, LockIcon, LoadingIcon } from 'components/ui/icons';

import { MonkeyHead } from '../monkeyHead';

import styles from './login.module.scss';




export const Login = observer(() => {
    const navigate = useNavigate();

    const [eyesClosed, setEyesClosed] = useState(false); // for the monkey head
    const [isFetching, setIsFetching] = useState(false);
    const [errors, setErrors] = useState<Record<string, string[]>>({
        username: [],
        password: [],
    });



    const updateErrors = (field: string, errors: string[]) => {
        setErrors(prev => {
            return { ...prev, [field]: errors };
        });
    };

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
                    <TitleBar className={styles.top_bar} />

                    <MonkeyHead eyesClosed={!eyesClosed} />

                    <Input
                        onFocus={() => setEyesClosed(true)}
                        onBlur={() => setEyesClosed(false)}
                        required
                        prefixIcon={<UserIcon />}
                        placeholder='username'
                        onErrorsChange={(errs) => updateErrors('username', errs)}
                    />
                    <Input
                        onFocus={() => setEyesClosed(true)}
                        onBlur={() => setEyesClosed(false)}
                        required prefixIcon={<LockIcon />}
                        placeholder='password'
                        type='password'
                        onErrorsChange={(errs) => updateErrors('password', errs)}
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
                        onClick={onBtnClick}
                        disabled={isFetching || !!Object.values(errors).filter(errs => errs.length).length}
                        shining
                    >
                        {isFetching ? <LoadingIcon /> : 'SIGN IN'}
                    </Button>

                    <div className={styles.register}>
                        {'Don\'t have an account?'} <Link to={'/register'}>Register now</Link>
                    </div>
                </div>
            </Wrapper3d>
        </div>
    );
});
