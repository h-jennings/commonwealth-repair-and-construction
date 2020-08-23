import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MobileMenu } from './MobileMenu';

const setup = () => {
  const componentContainer = document.createElement('div');
  const divWithServicesId = document.createElement('div');
  divWithServicesId.id = 'services';
  componentContainer.appendChild(divWithServicesId);
  render(<MobileMenu />, {
    baseElement: document.body.appendChild(componentContainer),
  });

  const closedTransformValue = 'translateX(100%) translateZ(0)';
  const openedTransformValue = 'translateX(0%) translateZ(0)';

  const menuList = screen.getByRole('list');
  const menuItems = screen.getAllByRole('listitem');
  const menuButton = screen.getByRole('button', { name: 'Mobile menu button' });

  return {
    vars: {
      closedTransformValue,
      openedTransformValue,
    },
    elements: {
      menuList,
      menuItems,
      menuButton,
    },
  };
};

test('Mobile opens and closes from button click', async () => {
  const utils = setup();
  const { closedTransformValue, openedTransformValue } = utils.vars;
  const { menuList, menuItems, menuButton } = utils.elements;

  // Initial State
  expect(menuList).toHaveAttribute('data-state', 'closed');
  menuItems.forEach((menuItem) => {
    expect(menuItem.style.transform).toBe(closedTransformValue);
  });

  // Opened State
  userEvent.click(menuButton);
  expect(menuList).toHaveAttribute('data-state', 'opened');
  await waitFor(() => {
    menuItems.forEach((menuItem) => {
      expect(menuItem.style.transform).toBe(openedTransformValue);
    });
  });

  // Closed State
  userEvent.click(menuButton);
  expect(menuList).toHaveAttribute('data-state', 'closed');
  await waitFor(() => {
    menuItems.forEach((menuItem) => {
      expect(menuItem.style.transform).toBe(closedTransformValue);
    });
  });
});

test('Mobile opens and closes from touchmove', async () => {
  const utils = setup();
  const { closedTransformValue } = utils.vars;
  const { menuList, menuItems, menuButton } = utils.elements;

  // Opened Menu
  userEvent.click(menuButton);

  // Close from touchmove
  fireEvent.touchMove(document.body);
  await waitFor(() => {
    expect(menuList).toHaveAttribute('data-state', 'closed');
  });
  await waitFor(() => {
    menuItems.forEach((menuItem) => {
      expect(menuItem.style.transform).toBe(closedTransformValue);
    });
  });
});

test('Mobile opens and closes from list link click', async () => {
  const utils = setup();
  const { closedTransformValue } = utils.vars;
  const { menuList, menuItems, menuButton } = utils.elements;
  const menuListItemButton = await screen.findByRole('button', {
    name: /services/i,
  });

  // Open Menu
  userEvent.click(menuButton);

  // Click on list item
  userEvent.click(menuListItemButton);

  // Should close menu
  await waitFor(() => {
    expect(menuList).toHaveAttribute('data-state', 'closed');
  });
  await waitFor(() => {
    menuItems.forEach((menuItem) => {
      expect(menuItem.style.transform).toBe(closedTransformValue);
    });
  });
});
