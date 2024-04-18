import { ReactNode } from 'react';
import { Navbar } from '@/components/navbar';

interface BaseLayoutProps {
    children: ReactNode;
}

export const BaseLayout = (props: BaseLayoutProps) => {
    const { children } = props;

    return (
        <>
            <Navbar />
            <div className="py-16 bg-green-50 overflow-hidden min-h-screen">
                <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
                    {children}
                </div>
            </div>
        </>
    );
};
