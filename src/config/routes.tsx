import { About } from '../pages/about';
import { Main } from '../pages/main';

export const BASE_API_ROUTE = process.env.REACT_APP_API_BASE;


interface ITopLevelRoute {
    path: string,
    component: JSX.Element,
}


export const TOP_LEVEL_ROUTES: ITopLevelRoute[] = [
    {
        component: <About />,
        path: 'about',
    },
    {
        component: <Main />,
        path: 'main',
    }
];
