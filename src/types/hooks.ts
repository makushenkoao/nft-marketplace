import { MetaMaskInpageProvider } from '@metamask/providers';
import { Contract, providers } from 'ethers';
import { SWRResponse } from 'swr';

export interface Web3Dependencies {
    provider: providers.Web3Provider;
    contact: Contract;
    ethereum: MetaMaskInpageProvider;
}

export interface CryptoHookFactory<D = unknown, P = unknown> {
    (deps: Partial<Web3Dependencies>): (params: P) => SWRResponse<D>;
}
