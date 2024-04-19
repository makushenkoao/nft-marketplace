import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cloneElement, ReactElement } from 'react';

interface LinkProps {
    href: string;
    children: ReactElement;
    activeClass: string;
}

const ActiveLink = (props: LinkProps) => {
    const { children, activeClass, href } = props;

    const pathname = usePathname();

    let className = children.props.className || '';
    let _defaultClass = `${className} text-gray-100`;

    if (pathname === href) {
        className = `${className} ${activeClass}`;
    } else {
        className = _defaultClass;
    }

    return <Link href={href}>{cloneElement(children, { className })}</Link>;
};

export default ActiveLink;
