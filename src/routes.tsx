import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


import { Home } from './pages/home';
import Aside from './components/Aside';

export default function AppRoutes() {
    return (
        <Router>
            <Aside />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}