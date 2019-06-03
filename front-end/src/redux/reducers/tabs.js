import {SELECT_TAB} from '../actions/types';

const initialState = {
    selected : 'profile'
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_TAB:
            return{
                ...state,
                selected: action.payload.selected
            }
        default:
            return state
    }
}
export default reducer;