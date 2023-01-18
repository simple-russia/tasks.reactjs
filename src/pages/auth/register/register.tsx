import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { authStore } from 'stores/authStore';

import { TitleBar, WavyLine, Wrapper3d } from 'components/ui/decoration';

import styles from './register.module.scss';
import { MonkeyHead } from '../monkeyHead';
import { Button, Checkbox, Input } from 'components/ui/form';
import { LoadingIcon, LockIcon, UserIcon } from 'components/ui/icons';
import mainImage from 'media/images/manager.jpg';
import { FieldValidator } from 'components/ui/form/input/validators';



const charsV: FieldValidator = (value) => {
    const validatorName = 'chars';

    const regexp = /^[a-zA-Z0-9_]*$/;

    if (regexp.test(value)) {
        return { isValid: true, validatorName };
    }

    return { isValid: false, validatorName, errorMessage: 'Use only latin letters, digits and _' };
};


export const Register = observer(() => {
    const [errors, setErrors] = useState<Record<string, string[]>>({
        a: [],
        b: [],
    });
    const navigate = useNavigate();


    useEffect(() => {
        if (authStore.currentUser) {
            navigate('/main', { relative: 'path' });
        }
    }, [authStore.currentUser]);


    return (
        <div className={styles.register_page_cont}>
            <Wrapper3d className={styles.register_wrapper} offset={12} lineWidth={1} backgroundColor={'#868686'}>
                <div className={styles.register_box}>
                    <TitleBar className={styles.top_bar} />

                    <div className={styles.image_box}>
                        <img draggable='false' src={mainImage} />
                    </div>

                    <div className={styles.form_box}>
                        <div className={styles.welcome_text}>
                            {'You\'ve been'}
                            <span>
                                <WavyLine className={styles.wavy1} color='#f3be1b' strokeWidth={6} />
                                looking
                            </span>
                            {' for it.'}
                        </div>
                        <MonkeyHead eyesClosed={false} />

                        <Input required prefixIcon={<UserIcon />} placeholder='username' />
                        <Input required prefixIcon={<LockIcon />} placeholder='password' type='password' />
                        <Input required prefixIcon={<LockIcon />} validators={[charsV]} placeholder='password' onErrorsChange={(errs) => setErrors(prev => ({ ...prev, a: errs }))} type='password' />
                        <Input required prefixIcon={<LockIcon />} placeholder='password' onErrorsChange={(errs) => setErrors(prev => ({ ...prev, b: errs }))} type='text' />

                        <div className={styles.agreement}>
                            <Checkbox /> I have read privacy policy and terms of service
                        </div>

                        <Button
                            style={{ width: '100%', height: 50 }}
                            shining
                            disabled={!!Object.values(errors).filter(errors => errors.length).length}
                        >
                            {false ? <LoadingIcon /> : 'REGISTER ME'}
                        </Button>

                        <div style={{ position: 'absolute' }}>
                            {Object.values(errors).filter(errors => errors.length).length}
                        </div>

                        <div className={styles.login}>
                            Already have an account? <Link to={'/login'}>Sign in here</Link>
                        </div>
                    </div>
                </div>
            </Wrapper3d>
        </div>
    );
});
