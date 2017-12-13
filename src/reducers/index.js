import { combineReducers } from 'redux'
//import { reducer as formReducer } from 'redux-form' MUST DOWNLOAD REDUX FORM FIRST
import Categories from './reducer_categories'
import Comments from './reducer_comments'

const rootReducer = combineReducers({
    categories: Categories,
    comments: Comments
})

export default rootReducer