import * as actions from "../actions/products-actions";

const initialState = {
    items: [],
    isLoading: false
}

const reducer = (state = initialState, action) => {

    if (actions.createProductAction.matches(action)) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (actions.createProductSuccessAction.matches(action)) {
        return {
            ...state,
            items: [
                ...state.items,
                action.payload
            ],
            isLoading: false
        };
    }

    if (actions.loadProductsAction.matches(action)) {
        return {
            ...state,
            items: [],
            isLoading: true
        };
    }

    if (actions.loadProductsSuccessAction.matches(action)) {
        return {
            ...state,
            items: action.payload,
            isLoading: false
        };
    }

    return state;
}

export default reducer;