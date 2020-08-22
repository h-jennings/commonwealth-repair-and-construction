import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MobileMenu } from './MobileMenu';

test('Mobile opens and closes from button click', async () => {
  render(<MobileMenu />);

  const menuList = screen.getByRole('list');
  const menuItems = screen.getAllByRole('listitem');
  const menuButton = screen.getByRole('button', { name: 'Mobile menu button' });
  const closedTransformValue = 'transform: translateX(100%) translateZ(0)';
  const openedTransformValue = 'transform: translateX(0%) translateZ(0)';

  // Initial State
  expect(menuList).toHaveAttribute('data-state', 'closed');
  expect(menuItems[0]).toHaveStyle(closedTransformValue);

  // Opened State
  userEvent.click(menuButton);
  expect(menuList).toHaveAttribute('data-state', 'opened');
  await waitFor(() => expect(menuItems[0]).toHaveStyle(openedTransformValue));

  // Closed State
  userEvent.click(menuButton);
  expect(menuList).toHaveAttribute('data-state', 'closed');
  await waitFor(() => expect(menuItems[0]).toHaveStyle(closedTransformValue));
});

// TODO: Add test for touchmove
