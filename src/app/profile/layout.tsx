import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { LayoutProps } from '@/types/layout';

export default function ProfileLayout(props: LayoutProps) {
    const { children } = props;

    return children;
}
