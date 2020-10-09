const reducer = (state=false, action)=>{
    switch(action.type){
        case "OPEN_NAV_MOBILE": return true
        case "CLOSE_NAV_MOBILE": return false
        default: return state
    }
}

export default reducer