import Router  from '../../routes';
import {LanguageProvider} from '../../contexts';

export default function App() {
    return (
    <LanguageProvider>
        <main className='container'>
            <Router />
        </main>
    </LanguageProvider>
    );
}