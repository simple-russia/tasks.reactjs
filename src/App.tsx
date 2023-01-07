import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { authStore } from './stores/authStore';
import './global.css';



const App = observer(() => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        authStore.getUserData();
    }, []);


    return (
        <div>
            <div style={{ marginBottom: '8px' }}>
                User: {authStore.currentUser?.username || 'anonymys'}
            </div>

            {
                !authStore.currentUser &&
                <>
                    <div>
                        username <input value={username} onChange={e => setUsername(e.target.value)} />
                    </div>

                    <div>
                        password <input value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                </>
            }

            <div style={{ display: 'flex', gap: '8px', paddingTop: '8px' }}>
                {
                    !authStore.currentUser ?
                        <>
                            <button onClick={() => authStore.login(username, password)}>login</button>
                            <button onClick={() => authStore.register(username, password)}>register</button>
                        </>
                        :
                        <>
                            <button onClick={() => authStore.logout()}>logout</button>
                        </>
                }
            </div>
        </div>
    );
});


export { App };
