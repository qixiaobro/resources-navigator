import {combineReducers} from 'redux-immutable'
import {
    reducer as demoReducer
}
from '../pages/demo/store'

export default combineReducers({
    demo:demoReducer,
})