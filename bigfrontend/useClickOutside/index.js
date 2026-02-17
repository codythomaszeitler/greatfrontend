import { createRoot } from 'react-dom/client';
import { useClickOutside } from './hook';
import { useState} from 'react';

const div = document.getElementById('app');
const root = createRoot(div);

root.render(<UseClickOutsideWrapper></UseClickOutsideWrapper>);

function UseClickOutsideWrapper() {
    const [message, setMessage] = useState('');
    const ref = useClickOutside(() => {
        setMessage('Clicked')
    });

    return (<div >
        <div ref={ref} style={{
            width: 300,
            height: 300
        }}>
            {message}
        </div>
    </div>)
}
