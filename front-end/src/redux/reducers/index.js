import * as types from '../actions/types'
const reducer = (state, action) => {

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
export default reducer;