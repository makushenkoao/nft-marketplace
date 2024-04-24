import { MetaMaskInpageProvider } from '@metamask/providers';
import { Contract, providers } from 'ethers';

// TODO: move
declare global {
    interface Window {
        ethereum: MetaMaskInpageProvider;
    }
}

export interface Web3Params {
    ethereum?: MetaMaskInpageProvider | null;
    provider?: providers.Web3Provider | null;
    contact?: Contract | null;
}

export type Web3State = {
    loading: boolean;
} & Web3Params;

export const createDefaultState = () => {
    return {
        ethereum: null,
        provider: null,
        contact: null,
        loading: true,
    };
};
