// Always takes the intial state and the action

import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [{
        id: 1,
        title: "Keychron-Keyboard",
        category: "developer"
    }]
}

export const productReducer = (state, { type, payload }) => {

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}