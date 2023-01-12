import { useEffect } from 'react';
import { authStore } from 'stores/authStore';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.scss';
import { WavyLine } from 'components/ui/decoration/wavyLine';
import { Pattern } from 'components/ui/decoration/circlePattern';
import { Wrapper3d } from 'components/ui/decoration/wrapper3d';


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
                <Pattern height={100} width={100} type='circle' color='#123456' styles={{ position: 'absolute', left: -55, top: 140 }} />

                <div className={styles.shadow_wrapper}>
                    <div className={styles.main_cont}>
                        <div className={styles.top_line} />

                        <input className={styles.input} placeholder='username' />

                        <span style={{ color: 'red', position: 'absolute', top: 155, left: 19, fontSize: 13 }}>Wrong password or username</span>
                        <span style={{ color: 'red', position: 'absolute', top: 220, left: 19, fontSize: 13 }}>Wrong password or username</span>

                        <input type={'password'} className={styles.input} placeholder='password' style={{ fontSize: 24, letterSpacing: 2, paddingTop: 5 }} />

                        <button className={styles.login_button}>SIGN IN</button>

                        <div
                            style={{ fontSize: 13, padding: '0 20px', lineHeight: '20px' }}
                        >
                            <input style={{ margin: 0, transform: 'translateY(2px)', filter: 'hue-rotate(45deg)', fontSize: 13 }} type='checkbox' /> I have read <a>privacy policy</a> and <a>terms of use</a>
                        </div>
                    </div>
                </div>

                <WavyLine style={{ transform: 'translate(-50px, -350px)', opacity: 0 }} width={200} waveLength={35} color='#33F' />

                <div style={{ width: 40, height: 40, border: '1px solid black' }}>
                    <div style={{ height: 40, width: 40, background: '#9884fb', transform: 'translate(7px, 9px)', boxSizing: 'border-box', zIndex: -1, position: 'absolute' }} />
                </div>
            </div>

            <Wrapper3d style={{ width: 550, height: 260, margin: 50 }} offset={8}>
                <div style={{ width: '100%', height: '100%', background: 'white' }}>1</div>
            </Wrapper3d>
        </div>
    );
});
