import Router  from '../../routes';
import {LanguageProvider,LogadoProvider} from '../../contexts';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react"

export default function App() {
    return (
    <LanguageProvider>
        <LogadoProvider>
        <main className='container'>
            <Router />
            <SpeedInsights />
            <Analytics />
        </main>
        </LogadoProvider>
    </LanguageProvider>
    );
}