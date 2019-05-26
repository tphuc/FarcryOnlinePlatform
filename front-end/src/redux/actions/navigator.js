
export const SET_STYLE = 'setStyle'
export const setStyle = (style) => {
    return {
        type:  SET_STYLE,
        payload:{
            style: style
        }
    }
}

