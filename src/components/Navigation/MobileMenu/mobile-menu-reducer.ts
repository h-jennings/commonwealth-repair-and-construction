export type MenuStates = 'opened' | 'closed';

export interface State {
  menuState: MenuStates;
}

export type Action = { type: 'TOGGLE' } | { type: 'CLOSE' };

export function mobileMenuReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TOGGLE': {
      switch (state.menuState) {
        case 'closed':
          return {
            ...state,
            menuState: 'opened',
          };
        case 'opened':
          return {
            ...state,
            menuState: 'closed',
          };
        default:
          return state;
      }
    }
    case 'CLOSE': {
      if (state.menuState === 'closed') return state;

      return {
        ...state,
        menuState: 'closed',
      };
    }
    default:
      return state;
  }
}
