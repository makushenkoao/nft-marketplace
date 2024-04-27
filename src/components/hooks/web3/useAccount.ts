import useSWR from 'swr';

import { CryptoHookFactory, Web3Dependencies } from '@/types/hooks';

// deps -> provider, contract (web3state)
export const hookFactory: CryptoHookFactory<string, string> =
    (deps) => (params) => {
        return useSWR('web3/useAccount', () => {
            console.log(deps);
            console.log(params);
            // TOdo: making request to get data
            return 'Test user';
        });
    };

export const useAccount = hookFactory({
    ethereum: undefined,
    provider: undefined,
});
