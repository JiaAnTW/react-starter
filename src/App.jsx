import { Provider } from 'react-redux';
import store from './redux/store.js';

import Router from './pages/Router';

export default function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}
