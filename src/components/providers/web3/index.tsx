'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

const Web3Context = createContext<any>(null);

interface Web3ProviderProps {
    children: ReactNode;
}

export const Web3Provider = (props: Web3ProviderProps) => {
    const { children } = props;

    const [web3Api, setWeb3Api] = useState({ test: 'web 3 provider' });

    return (
        <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
    );
};

export function useWeb3() {
    return useContext(Web3Context);
}
