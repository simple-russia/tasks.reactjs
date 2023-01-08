import { observer } from 'mobx-react-lite';
import { authStore } from '../../stores/authStore';


export const About = observer(() => {
    return (
        <div>
            {
                !authStore.currentUser ?
                    'you need to pass authentication'
                    :
                    'About our some super secret dara'
            }
        </div>
    );
});
