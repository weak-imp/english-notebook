import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './00_app';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <MantineProvider defaultColorScheme="auto">
        <App />
      </MantineProvider>
    </React.StrictMode>,
  );
}
