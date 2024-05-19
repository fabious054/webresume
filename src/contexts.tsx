import React, { createContext, useState } from 'react';

type LanguageContextType = {
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
  };

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }:{children: React.ReactNode}) {
    const [language, setLanguage] = useState('pt-br');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

type LogadoContextType = {  
    logado: boolean;
    setLogado: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LogadoContext = createContext<LogadoContextType | undefined>(undefined);

export function LogadoProvider({ children }:{children: React.ReactNode}) {
    const [logado, setLogado] = useState(false);

    return (
        <LogadoContext.Provider value={{ logado, setLogado }}>
            {children}
        </LogadoContext.Provider>
    );
}

