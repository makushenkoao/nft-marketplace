import { Metadata } from 'next';

import { LayoutProps } from '@/types/layout';

export const metadata: Metadata = {
    title: 'Account | NFT Nexus',
    description: 'Description',
};

export default function ProfileLayout(props: LayoutProps) {
    const { children } = props;

    return children;
}
