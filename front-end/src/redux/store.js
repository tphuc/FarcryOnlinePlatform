import reducer from  './reducers/index'
import { createStore } from 'redux'

const initialState = {
    lazyWeapon : 1,
    screenBrightness : 1,
    graphicQuality : 3,
    playerModel : 'Jack',
    skinColor : 2,
}

const store = createStore(reducer, initialState);
export default store;