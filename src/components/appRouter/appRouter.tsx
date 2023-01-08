import { observer } from 'mobx-react-lite';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { TOP_LEVEL_ROUTES } from '../../config/routes';



export const AppRouter = observer(() => {
    return (
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
    );
});
