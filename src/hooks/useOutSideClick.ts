import { RefObject, useEffect } from 'react';

const useOutSideClick = (ref: RefObject<Element>, onClick: () => unknown) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!(event.target instanceof Element)) return;

            if (ref.current?.contains(event.target) === false) {
                onClick();
            }
        };

        document.addEventListener('mousedown', handleClickOutside, false);
        return () => document.removeEventListener('mousedown', handleClickOutside, false);
    }, [ref, onClick]);
};

export default useOutSideClick;
