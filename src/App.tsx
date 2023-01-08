import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { authStore } from 'stores/authStore';

import { AppRouter } from 'components/appRouter/appRouter';
import { AppLayout } from 'components/appLayout/appLayout';

import './global.css';



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
