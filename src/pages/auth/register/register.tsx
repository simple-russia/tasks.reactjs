import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { authStore } from 'stores/authStore';
import { registerStore } from './registerStore';

import { TitleBar, WavyLine, Wrapper3d } from 'components/ui/decoration';
import { MonkeyHead } from '../monkeyHead';
import { Button, Checkbox, Input } from 'components/ui/form';
import { LoadingIcon, LockIcon, UserIcon } from 'components/ui/icons';

import mainImage from 'media/images/manager.jpg';

import { createPasswordRepeatValidator, passwordCharsetValidator, passwordLengthValidator, usernameCharsetValidator, usernameLengthValidator } from './validators';

import styles from './register.module.scss';



export const Register = observer(() => {
    const navigate = useNavigate();


    const onRegisterClick = () => {
        registerStore.registerUser();
    };


    useEffect(() => {
        if (authStore.currentUser) {
            navigate('/main', { relative: 'path' });
        }
    }, [authStore.currentUser]);


    return (
        <div className={styles.register_page_cont}>
            <Wrapper3d className={styles.register_wrapper} offset={12} lineWidth={1} backgroundColor={'#bcc2ea66'}>
                <div className={styles.register_box}>
                    <TitleBar className={styles.top_bar} />

                    <div className={styles.image_box}>
                        <img draggable='false' src={mainImage} />
                    </div>

                    <div className={styles.form_box}>
                        <div className={styles.welcome_text}>
                            {'Workflow control is '}
                            <span>
                                <WavyLine className={styles.wavy1} color='#f3be1b' strokeWidth={5} />
                                greater
                            </span>
                            {' now'}
                        </div>

                        <MonkeyHead eyesClosed={false} />

                        <Input
                            required
                            prefixIcon={<UserIcon />}
                            placeholder='username'
                            value={registerStore.username}
                            onChange={(e) => registerStore.setUsername(e.target.value)}
                            onErrorsChange={(errs) => registerStore.setErrors('username', errs)}
                            validators={[usernameLengthValidator, usernameCharsetValidator]}
                            maxLength={30}
                        />

                        <Input
                            required
                            prefixIcon={<LockIcon />}
                            placeholder='password'
                            type='password'
                            value={registerStore.password}
                            onChange={(e) => registerStore.setPassword(e.target.value)}
                            onErrorsChange={(errs) => registerStore.setErrors('password', errs)}
                            maxLength={35}
                            validators={[passwordLengthValidator, passwordCharsetValidator]}
                        />


                        <div style={{ marginBottom: 4, fontSize: 15 }}>Repeat password:</div>

                        <Input
                            prefixIcon={<LockIcon />}
                            required
                            placeholder='repeat password'
                            onErrorsChange={(errs) => registerStore.setErrors('repeatPassword', errs)}
                            type='password'
                            value={registerStore.passwordRepeat}
                            onChange={(e) => registerStore.setPasswordRepeat(e.target.value)}
                            maxLength={35}
                            validators={[createPasswordRepeatValidator(registerStore.password)]}
                        />

                        <Input
                            placeholder='your invite code'
                            // onErrorsChange={(errs) => registerStore.setErrors('code', errs)}
                            type='text'
                        />

                        <div className={styles.agreement}>
                            <Checkbox
                                value={registerStore.checkedPolicy}
                                onChange={() => registerStore.toggleCheckedPolicy()}
                            /> I have read privacy policy and terms of service
                        </div>

                        <Button
                            style={{ width: '100%', height: 50 }}
                            shining
                            disabled={!registerStore.isValid || registerStore.isRegistering}
                            onClick={onRegisterClick}
                        >
                            {registerStore.isRegistering ? <LoadingIcon /> : 'REGISTER ME'}
                        </Button>

                        <div className={styles.login}>
                            Already have an account? <Link to={'/login'}>Sign in here</Link>
                        </div>
                    </div>
                </div>
            </Wrapper3d>
        </div>
    );
});
