import useSWR from 'swr';

import { CryptoHookFactory } from '@/types/hooks';

type AccountHookFactory = CryptoHookFactory<string, string>;

export type UseAccountHook = ReturnType<AccountHookFactory>;

// deps -> provider, contract (web3state)
export const hookFactory: AccountHookFactory = (deps) => (params) => {
    return useSWR('web3/useAccount', () => {
        console.log(deps);
        console.log(params);
        // TOdo: making request to get data
        return 'Test user';
    });
};
