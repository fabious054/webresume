import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


import { Home } from './pages/home';
import ContentPage from './pages/contentPage';
import NotFound from './pages/NotFound';
import Certificate from './pages/Certificate';
import Admin from './pages/Admin';
import Login from './pages/Login';


export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ContentPage />}>
                    <Route index element={<Home />} />
                    <Route path='certificate/:id'  element={<Certificate />} />
                </Route>
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}