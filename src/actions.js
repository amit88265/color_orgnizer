import constants from "./constants";

export const addColor = (title, color) => ({
    type: constants.ADD_COLOR,
        title,
        color
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