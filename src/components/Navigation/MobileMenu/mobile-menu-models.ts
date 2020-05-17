export type MenuStates = 'opened' | 'closed';

export interface State {
  menuState: MenuStates;
}

export type Action = { type: 'TOGGLE' } | { type: 'CLOSE' };
