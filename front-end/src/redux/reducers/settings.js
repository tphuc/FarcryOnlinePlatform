import * as types from '../actions/types'

const initialState = {
    lazyWeapon : 1,
    screenBrightness : 1,
    graphicQuality : 3,
    playerModel : 'Jack',
    skinColor : 2,
    path: 'C:\\Bin\\FarCry\\Bin32\\FarCry.exe'
}


const setting = (state = initialState, action) => {

    switch(action.type){

        case types.SET_SLIDER_VALUE:
            return{
                ...state,
                [action.payload.varName] : action.payload.value,
            }
        case types.SET_GAME_PATH:
            return{
                ...state,
                path: action.payload.path
            }
        default :
            return state
    }
}

export default setting;