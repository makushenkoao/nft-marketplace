import {
    hookFactory,
    UseAccountHook,
} from '@/components/hooks/web3/useAccount';
import { Web3Dependencies } from '@/types/hooks';

export interface Web3Hooks {
    useAccount: UseAccountHook;
}

export interface SetupHooks {
    (deps: Web3Dependencies): Web3Hooks;
}

export const setupHooks: SetupHooks = (deps) => {
    return {
        useAccount: hookFactory(deps),
    };
};
