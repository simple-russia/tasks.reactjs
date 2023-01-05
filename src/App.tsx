import logo from './logo.svg';
import { ReactComponent as Al } from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { appStore } from './store';



const App = observer(() => {
    useEffect(() => {
        console.log('mounted');
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                counter: {appStore.counter} <button onClick={() => appStore.increment()}>+1</button>
                <Al className="App-logo" fill='red' />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
});


export { App };
