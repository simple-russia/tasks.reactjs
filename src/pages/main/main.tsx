import { observer } from 'mobx-react-lite';
import { authStore } from 'stores/authStore';


export const Main = observer(() => {
    return (
        <div>
            Main content of the app ksks
            <button onClick={() => authStore.getUserData()}>Get user data</button>
        </div>
    );
});
