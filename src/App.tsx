import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { authStore } from './stores/authStore';
import './global.css';
import { AppRouter } from './components/appRouter/appRouter';
import { BrowserRouter } from 'react-router-dom';
import { AppLayout } from './components/appLayout/appLayout';



const App = observer(() => {
    useEffect(() => {
        authStore.getUserData();
    }, []);


    return (
        <BrowserRouter>
            <AppLayout>
                <AppRouter />
            </AppLayout>
        </BrowserRouter>
    );
});


export { App };
