import {SELECT_TAB} from '../actions/types';

export const selectTab = (tabname) => {
    return{
        type: SELECT_TAB,
        payload:{
            selected : tabname
        }
    }
}
