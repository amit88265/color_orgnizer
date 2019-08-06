import constants from "./constants";
import v4 from 'uuid';

export const addColor = (title, color) => ({
    type: constants.ADD_COLOR,
    id:v4(),
    title,
    color,
    timestamp:new Date()
})

export const rateColor = (id,rating) => ({
    type: constants.RATE_COLOR,
        id,
        rating
})
export const removeColor = (id) =>( {
    type: constants.REMOVE_COLOR,
        id
})