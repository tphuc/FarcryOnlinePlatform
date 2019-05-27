import * as types from '../actions/types'

const initialState = {
    lazyWeapon : 1,
    screenBrightness : 1,
    graphicQuality : 3,
    playerModel : 'Jack',
    skinColor : 2,
}


const setting = (state = initialState, action) => {

    switch(action.type){

        case types.SET_SLIDER_VALUE:
            return{
                ...state,
                [action.payload.varName] : action.payload.value,
            }

        default :
            return state
    }
}

export default setting;