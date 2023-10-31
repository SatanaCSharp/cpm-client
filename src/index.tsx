import React from 'react';
import { AppRouter } from 'routes/App.router';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root') as Element;
const root = createRoot(container);

root.render(<React.StrictMode><AppRouter /></React.StrictMode>);
