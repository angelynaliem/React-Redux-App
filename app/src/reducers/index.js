import * as actions from "../actions";


const initialState = {

    quote: "",
    isFetching: false,
    error: ""

}

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actions.QUOTE_FETCHING:
            console.log("fetching a quote")
            return {
                ...state,
                isFetching: true
            }
            case actions.QUOTE_FETCHED:
                console.log("fetching success")
                return {
                    ...state,
                    quote: action.payload,
                    isFetching: false
                }
            case actions.QUOTE_ERROR:
                console.log("fetching failed")
                return {
                    ...state,
                    error: action.payload,
                    isFetching: false
                }
            default:
                return state

    }

} 
