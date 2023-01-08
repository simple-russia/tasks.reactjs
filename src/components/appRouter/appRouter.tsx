import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Route } from 'react-router';
import { Link, Routes } from 'react-router-dom';
import { TOP_LEVEL_ROUTES } from '../../config/routes';
import { authStore } from '../../stores/authStore';



export const AppRouter = observer(() => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <div style={{ padding: '8px', background: '#444', display: 'flex', justifyContent: 'flex-end', height: '40px', boxSizing: 'border-box' }}>
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

            <div>
                <Link to='main'><button>main</button></Link>
                <Link to='about'><button>about</button></Link>
            </div>

            <div style={{ padding: '16px' }}>
                <Routes>
                    {
                        TOP_LEVEL_ROUTES.map(route => {
                            return (
                                <Route key={route.path} element={route.component} path={route.path} />
                            );
                        })
                    }
                    <Route path='*' element={<div>404</div>} />
                </Routes>
            </div>
        </div>
    );
});
