import { useEffect, useRef} from "react"

export function useUpdateEffect(effect, deps) {
    const ref = useRef(false);

    useEffect(() => {
        if (ref.current) {
            return effect();
        }
    }, deps);

    useEffect(() => {
        ref.current = true;
    }, []);
}