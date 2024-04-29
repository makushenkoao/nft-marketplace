'use client';

import { ethers } from 'ethers';
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';

import {
    createDefaultState,
    createWeb3State,
    loadContact,
    Web3State,
} from './utils';

const Web3Context = createContext<Web3State>(createDefaultState());

interface Web3ProviderProps {
    children: ReactNode;
}

export const Web3Provider = (props: Web3ProviderProps) => {
    const { children } = props;

    useEffect(() => {
        async function initWeb3() {
            const ethereum = window.ethereum;
            const provider = new ethers.providers.Web3Provider(ethereum as any);
            const contract = await loadContact('NftMarket', provider);

            setWeb3Api(
                createWeb3State({
                    ethereum,
                    provider,
                    contract,
                    loading: false,
                }),
            );
        }

        initWeb3();
    }, []);

    const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState());

    return (
        <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
    );
};

export function useWeb3() {
    const context = useContext(Web3Context);

    if (!context) {
        throw new Error('useWeb3 must be used within a Web3Provider');
    }

    return context;
}
