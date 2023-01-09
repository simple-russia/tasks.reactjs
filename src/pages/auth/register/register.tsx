import { authStore } from 'stores/authStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';



export const Register = observer(() => {
    const navigate = useNavigate();


    useEffect(() => {
        if (authStore.currentUser) {
            navigate('/main', { relative: 'path' });
        }
    }, [authStore.currentUser]);


    return (
        <div>Register</div>
    );
});
