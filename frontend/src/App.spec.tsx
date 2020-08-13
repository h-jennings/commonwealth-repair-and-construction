import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

test('runs the first test', () => {
  expect(true).toBe(true);
});

test('App does render', async () => {
  const app = render(<App />);
  app.debug();
});
