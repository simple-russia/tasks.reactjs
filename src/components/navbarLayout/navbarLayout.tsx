import { authStore } from 'stores/authStore';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';



interface INavbarLayoutProps {
    children: JSX.Element | JSX.Element[]
}

export const NavbarLayout = observer(({ children }: INavbarLayoutProps) => {
    const navigate = useNavigate();


    const onLogoutClick = async () => {
        await authStore.logout();
        navigate('/login');
    };

    const onLoginClick = () => {
        navigate('/login');
    };

    const onRegisterClick = () => {
        navigate('/register');
    };

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
                                <button style={{ marginLeft: '8px' }} onClick={onLogoutClick}>logout</button>
                            </div>
                            :
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'white' }}>
                                <button style={{ color: 'white' }} onClick={onLoginClick}>login</button>
                                <button style={{ color: 'white' }} onClick={onRegisterClick}>register</button>
                            </div>
                    }
                </div>
            </div>

            <div>
                {children}
            </div>
        </div>
    );
});
