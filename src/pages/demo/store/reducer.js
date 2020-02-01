import {fromJS} from 'immutable'
import * as constants from './constants'
const defaultState=fromJS({
    storeHello:'store Hello'
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_WORD:
            return state.set('storeHello', action.word)
        default:
            return state
    }
}