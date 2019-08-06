import constants from '../../../constants';
import { colorsReducer } from '../../../reducers/colorsReducer.js';
import v4 from 'uuid';

describe("testing colors reducer", () => {

    test("Add color success", () => {
        let state = [];
        const action = {
            type: constants.ADD_COLOR,
            title: "add test color",
            color: "#123456",
            id: v4(),
            timestamp: new Date()
        }
        const result = colorsReducer(state, action);
        expect(result).toEqual([{
            title: "add test color",
            color: "#123456",
            rating: 0,
            id: action.id,
            timestamp: action.timestamp
        }])
    });

    test("rate color success on empty state", () => {
        const state = [];
        const action = {
            id: v4(),
            rating: 3.5
        }
        const result = colorsReducer(state, action);
        expect(result).toEqual([]);
    });

    test("rate color success on filled state", () => {
        let state = [];
        const action1 = {
            type: constants.ADD_COLOR,
            title: "add test color1",
            color: "#123458",
            id: v4(),
            timestamp: new Date()
        }
        const result1 = colorsReducer(state, action1);
        state=[...result1];
        const action2 = {
            type: constants.ADD_COLOR,
            title: "add test color2",
            color: "#123455",
            id: v4(),
            timestamp: new Date()
        }
        const result2 = colorsReducer(state, action2);
        state=[...result2];
        const actionrateColor = {
            id: result2.id,
            rating: 3.5
        }

        const result = colorsReducer(state, actionrateColor);
        expect(result).toEqual([...state])
    })

})