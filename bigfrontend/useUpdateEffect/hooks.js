import { useEffect, useRef} from "react"

export function useUpdateEffect(effect, deps) {
    const ref = useRef(false);

    useEffect(() => {
        if (!ref.current) {
            ref.current = true;
        } else {
            return effect();
        }
    }, deps);
}