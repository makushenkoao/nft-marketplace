import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import { Web3Provider } from '@/components/providers/web3';
import { LayoutProps } from '@/types/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'NFT Nexus',
    description: 'Description',
};

export default function RootLayout(props: LayoutProps) {
    const { children } = props;

    return (
        <html lang="en">
            <body className={inter.className}>
                <Web3Provider>{children}</Web3Provider>
            </body>
        </html>
    );
}
