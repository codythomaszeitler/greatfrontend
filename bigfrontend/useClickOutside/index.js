import {createRoot} from 'react-dom/client';

const div = document.getElementById('app');
const root = createRoot(div);

root.render(<h1>Hello, World!</h1>);