
import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import { UseUpdateEffectWrapper } from './wrapper';

document.body.innerHTML = '<div id="app"></div>'

const root = createRoot(document.getElementById('app'));
root.render(<UseUpdateEffectWrapper></UseUpdateEffectWrapper>)

console.log('we are within index.js');