export const ListItemReducer = (state = { cardState: 'front' }, action) => {
  switch (action.type) {
    case 'TO_BACK':
      return { ...state, cardState: 'back' }
    case 'TO_FRONT':
      return { ...state, cardState: 'front' }
    case 'TO_FOLD':
      return { ...state, cardState: 'fold' }
    case 'TO_COLLAPSE':
      return { ...state, cardState: 'collapse' }
    default:
      return state
  }
}