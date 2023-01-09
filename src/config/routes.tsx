import { About } from 'pages/about';
import { Careers } from 'pages/careers';
import { Login } from 'pages/auth/login';
import { Main } from 'pages/main';
import { Register } from 'pages/auth/register';

export const BASE_API_ROUTE = process.env.REACT_APP_API_BASE;


interface IRoute {
    path: string,
    component: JSX.Element,
}

// routes that do not conform to the generic layout
export const UNIQUE_ROUTES: IRoute[] = [
    {
        component: <Login />,
        path: 'login',
    },
    {
        component: <Register />,
        path: 'register',
    }
];

export const TOP_LEVEL_ROUTES: IRoute[] = [
    {
        component: <About />,
        path: 'about',
    },
    {
        component: <Main />,
        path: 'main',
    },
    {
        component: <Careers />,
        path: 'careers',
    },
];
