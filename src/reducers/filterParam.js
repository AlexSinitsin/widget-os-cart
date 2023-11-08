import { RESET_FILTERED_PARAM, INIT_FILTERED_PARAM, SET_FILTERED_LIST_PARAM, SET_FILTERED_SLIDER_PARAM } from '../constants';

const filterParam = (state = {}, action) => {
  switch (action.type) {
    case INIT_FILTERED_PARAM: {
        for(let i = 0; i < action.payload.length; i += 1) {
          if (action.payload[i].type === 'slider') {
            state = { ...state, 
              [action.payload[i].display_name]: 
              {type: action.payload[i].type, 
               filterParam: action.payload[i].display_name, 
               data: {min: action.payload[i].slider_min_value, max: action.payload[i].slider_max_value}} }

          } else if (action.payload[i].type === 'list'){
            
            state= { ...state,
               [action.payload[i].display_name]: 
               {type: action.payload[i].type, 
                filterParam: action.payload[i].display_name, 
                data:[] }}
          } 
        }
        return state
    }
    case RESET_FILTERED_PARAM: {
        for(let i = 0; i < action.payload.length; i += 1) {
          if (action.payload[i].type === 'slider') {
            state = { ...state, 
              [action.payload[i].display_name]: 
              {type: action.payload[i].type, 
               filterParam: action.payload[i].display_name, 
               data: {min: action.payload[i].slider_min_value, max: action.payload[i].slider_max_value}} }

          } else if (action.payload[i].type === 'list'){
            
            state = { ...state,
               [action.payload[i].display_name]: 
               {type: action.payload[i].type, 
                filterParam: action.payload[i].display_name, 
                data:[] }}
          } 
        }
        return state
    }
    case SET_FILTERED_LIST_PARAM: {
      if(state[action.filterData.display_name].data.includes(action.payload)) {
         state[action.filterData.display_name].data = state[action.filterData.display_name]
        .data.filter(param => param !== action.payload)
        return state
      } 
      else {
        state[action.filterData.display_name].data = 
        [...state[action.filterData.display_name].data, action.payload]
        return state
      }
    }
    case SET_FILTERED_SLIDER_PARAM: {
      state[action.typeFilter].data = action.payload
      return state
    }
    default:
      return state;
  }
}

export default filterParam;