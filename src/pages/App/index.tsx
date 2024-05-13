import Router  from '../../routes';
import {LanguageProvider} from '../../contexts';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react"

export default function App() {
    return (
    <LanguageProvider>
        <main className='container'>
            <Router />
            <SpeedInsights />
            <Analytics />
        </main>
    </LanguageProvider>
    );
}