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

