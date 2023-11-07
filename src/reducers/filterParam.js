import { INIT_FILTERED_PARAM, SET_FILTERED_LIST_PARAM, SET_FILTERED_SLIDER_PARAM } from '../constants';

const filterParam = (state = {}, action) => {
  switch (action.type) {
    case INIT_FILTERED_PARAM: {
      for(const filter of action.payload) {
        if (filter.slider_min_value) {
          state[filter.display_name] = [filter.slider_min_value, filter.slider_max_value]
        } else {
          state[filter.display_name] = []
        }
        
      }
      return state
    }
    case SET_FILTERED_LIST_PARAM: {
      if(state[action.filterData.display_name].includes(action.payload)) {
        state[action.filterData.display_name] = state[action.filterData.display_name].filter(param => param !== action.payload)
        return state
      } 
      else {
        state[action.filterData.display_name] = [...state[action.filterData.display_name], action.payload]
        return state
      }
    }
    case SET_FILTERED_SLIDER_PARAM: {
      state[action.typeFilter] = action.payload
      return state
    }
    default:
      return state;
  }
}

export default filterParam;