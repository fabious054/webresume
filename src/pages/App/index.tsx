import Router  from '../../routes';
import {LanguageProvider} from '../../contexts';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
    return (
    <LanguageProvider>
        <main className='container'>
            <Router />
            <SpeedInsights />
        </main>
    </LanguageProvider>
    );
}