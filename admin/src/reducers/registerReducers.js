const INITIAL_STATE = {
    name : '',
    voterId: '',
    mobile_no: '',
    gender: '',
    msg: '',
    pic: null
}

export default (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'voterIdChanged_reg':
            return { ...state , voterId : action.payload }
        case 'mobileNumChanged':
            return {...state, voterId: action.payload }
        case 'genderSelect': 
            return {...state, gender: action.payload }
        case 'registerSuccess': 
            return { ...state, msg : action.payload}
        case 'registerFail':
            return { ...state,...INITIAL_STATE, msg : action.paylaod}
        case 'takePic' :
            return { ...state, pic : action.payload }
        default:
            return state
        }
    }