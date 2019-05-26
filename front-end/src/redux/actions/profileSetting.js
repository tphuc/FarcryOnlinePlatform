
import * as types from './types'

export const setSliderValue = (value, varName) => {
    return {
        type: types.SET_SLIDER_VALUE,
        payload:{
            varName: varName,
            value: value
        }
    }
}

