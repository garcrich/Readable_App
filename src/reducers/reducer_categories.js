
import { FETCH_CATEGORIES } from '../actions'

function categories(state = {}, action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            //state, action
            return [...state,...action.payload]
        default:
            return state
    }
}

export default categories;