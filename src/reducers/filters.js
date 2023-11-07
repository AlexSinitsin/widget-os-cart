import { INIT_FILTERS } from '../constants';

const filter = (state = [], action) => {
  switch (action.type) {
    case INIT_FILTERS: {
        const items = action.payload
        return [...state, ...items]
    }
    default:
      return state;
  }
}

export default filter;