import { useEffect, RefObject } from 'react';
import { usePathname } from 'next/navigation';

const useScrollToSection = (
    ref: RefObject<HTMLElement | null>,
    targetPath: string
) => {
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === targetPath && ref.current) {
            setTimeout(() => {
                ref.current?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    }, [pathname, targetPath, ref]);
};

export default useScrollToSection;