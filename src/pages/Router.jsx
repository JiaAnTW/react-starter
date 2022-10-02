import { createHashRouter } from 'react-router-dom';

// Page Component
import Index from './Index';

const router = createHashRouter([
    {
        path: '/',
        element: <Index />,
    },
]);

export default router;
