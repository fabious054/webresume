import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


import { Home } from './pages/home';
import Aside from './components/Aside';
import Footer from './components/Footer';
import ButtonSetLanguage from './components/ButtonSetLanguage';
import ContentPage from './pages/contentPage';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
    return (
        <Router>
            <Aside />
            <ButtonSetLanguage />
            <Routes>
                <Route path="/" element={<ContentPage />}>
                    <Route index element={<Home />} />
                </Route>
            <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}