import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import store from './redux/store.js';
import router from './pages/router';

export default function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}
