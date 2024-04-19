import { NftMeta } from '@/types/nft';

import { NftItem } from '../item';

interface NftListProps {
    nfts: NftMeta[];
}

export const NftList = (props: NftListProps) => {
    const { nfts } = props;

    return (
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {nfts.map((nft) => (
                <NftItem
                    key={nft.name}
                    nft={nft}
                />
            ))}
        </div>
    );
};
