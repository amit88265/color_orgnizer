import constants from '../constants';

const colorReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.ADD_COLOR:
            return {
                ...state,
                id: action.id,
                title: action.title,
                color: action.color,
                timestamp:action.timestamp,
                rating: 0
            }
        case constants.RATE_COLOR:
            return {
                ...state,
                rating: action.rating
            }
        default: return state;
    }
}


export const colorsReducer = (state = [], action) => {
    switch (action.type) {
        case constants.ADD_COLOR:
            return [...state, colorReducer({}, action)];
        case constants.REMOVE_COLOR:
            return state.filter(item => item.id !== action.id)
        case constants.RATE_COLOR: {
            return state.map(item => item.id !== action.id ? item : colorReducer(item, action));
        }
        default: return state;

    }

}