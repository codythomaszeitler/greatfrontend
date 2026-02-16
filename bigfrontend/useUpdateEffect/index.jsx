
import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

document.body.innerHTML = '<div id="app"></div>'

const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, World</h1>)

console.log('we are within index.jsx');