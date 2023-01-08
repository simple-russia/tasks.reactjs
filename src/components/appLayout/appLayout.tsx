import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { authStore } from '../../stores/authStore';



interface IAppLayoutProps {
    children: JSX.Element | JSX.Element[]
}


export const AppLayout = observer(({ children }: IAppLayoutProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <div style={{ padding: '8px', background: '#444', display: 'flex', justifyContent: 'space-between', height: '40px', boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Link to='main'><button>main</button></Link>
                    <Link to='about'><button>about</button></Link>
                    <Link to='careers'><button>careers</button></Link>
                </div>

                <div>
                    {
                        authStore.currentUser ?
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: '#bbb', marginRight: '4px' }}>
                                User:
                                </span>
                                {authStore.currentUser.username}

                                <button style={{ marginLeft: '8px' }} onClick={() => authStore.logout()}>logout</button>
                            </div>
                            :
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input value={username} onChange={e => setUsername(e.target.value)} placeholder='username' />
                                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='password' type='password' />
                                <button onClick={() => authStore.login(username, password)}>login</button>
                                <button onClick={() => authStore.register(username, password)}>register</button>
                            </div>
                    }
                </div>
            </div>

            <div style={{ padding: '16px' }}>
                {children}
            </div>
        </div>
    );
});
