import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { LayoutProps } from '@/types/layout';

export const metadata: Metadata = {
    title: 'Create NFT | NFT Nexus',
    description: 'Description',
};

export default function CreateLayout(props: LayoutProps) {
    const { children } = props;

    return children;
}
