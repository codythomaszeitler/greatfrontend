import { render, screen } from '@testing-library/react'
import { UseUpdateEffectWrapper } from '../wrapper';
import { useUpdateEffect } from '../hooks';
import {useState} from 'react'

describe('hooks', () => {

    // Okay... but now the question is is how other dependencies work.
    it('should not do anything on first render (no deps given)', () => {
        const onSecondRender = jest.fn();

        const { rerender } = render(<UseUpdateEffectWrapper onSecondRender={onSecondRender}></UseUpdateEffectWrapper>);

        expect(onSecondRender).not.toHaveBeenCalled();

        rerender(<UseUpdateEffectWrapper onSecondRender={onSecondRender}></UseUpdateEffectWrapper>)

        expect(onSecondRender).toHaveBeenCalled();
    });

    it('should not do anything on first render (one dep given)', () => {
        const onSecondRender = jest.fn();

        const { rerender } = render(<TestWrapper onSecondRender={onSecondRender}></TestWrapper>);
        expect(onSecondRender).not.toHaveBeenCalled();

        rerender(<TestWrapper onSecondWrapper={onSecondRender} updateSetCount></TestWrapper>)

        expect(onSecondRender).toHaveBeenCalled();
    });
});

function TestWrapper({onSecondWrapper, updateSetCount}) {
    const [count, setCount] = useState(0);
    useUpdateEffect(onSecondWrapper, [count]);

    if (updateSetCount && count === 0) {
        setCount(count + 1);
    }
}
