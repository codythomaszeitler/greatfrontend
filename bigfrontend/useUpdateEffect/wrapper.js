import { useState } from "react";
import { useUpdateEffect } from "./hooks"

export function UseUpdateEffectWrapper() {
    useUpdateEffect(() => {
        console.log('--- this should only be called after the first render ---');
    });


    const [_, setCount] = useState(0);
    setTimeout(() => {
        setCount((count) => count + 1);
    }, 5000);

    return (<div>Use Update Effect Wrapper</div>)
}