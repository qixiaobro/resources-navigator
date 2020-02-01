import * as constants from './constants'

export const changeStoreWord = (value) => (
    {
        type: constants.CHANGE_WORD,
        word: value
    }
)