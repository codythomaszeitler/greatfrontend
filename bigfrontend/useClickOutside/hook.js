import { useEffect, useRef } from "react";

export function useClickOutside(callback) {
    const ref = useRef(null);

    useEffect(() => {
        const onClickListener = (event) => {
            if (event.target && ref.current) {
                if (!ref.current.contains(event.target)) {
                    callback();
                }
            }
        }

        document.addEventListener('click', onClickListener);
        return () => {
            document.removeEventListener('click', onClickListener);
        }

    }, []);


    return ref;
}