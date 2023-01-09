import { observer } from 'mobx-react-lite';
import { Outlet, Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { TOP_LEVEL_ROUTES, UNIQUE_ROUTES } from 'config/routes';
import { NavbarLayout } from 'components/navbarLayout';



export const AppRouter = observer(() => {
    return (
        <Routes>
            <Route element={<NavbarLayout><Outlet /></NavbarLayout>}>
                {
                    TOP_LEVEL_ROUTES.map(route => {
                        return (
                            <Route key={route.path} element={route.component} path={route.path} />
                        );
                    })
                }
            </Route>

            {
                UNIQUE_ROUTES.map(route => {
                    return (
                        <Route key={route.path} element={route.component} path={route.path} />
                    );
                })
            }

            <Route path='*' element={<div>404</div>} />
        </Routes>
    );
});
