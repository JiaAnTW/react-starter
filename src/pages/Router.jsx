import { HashRouter, Route, Routes } from 'react-router-dom';

// Page Component
import Index from './Index';

function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>
        </HashRouter>
    );
}

export default Router;
