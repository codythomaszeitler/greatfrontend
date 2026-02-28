import { useUpdateEffect } from "./hooks"

// Okay well that's interesting.
// If  you pass in a [] - then you would only run on first render...
// is that what this is trying to accomplish?
export function UseUpdateEffectWrapper({onSecondRender}) {
    useUpdateEffect(onSecondRender);
    return (<div>Use Update Effect Wrapper</div>)
}