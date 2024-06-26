import { useHooks } from '@/components/providers/web3';

export const useAccount = () => {
    const hooks = useHooks();
    const account = hooks.useAccount();

    return {
        account,
    };
};
