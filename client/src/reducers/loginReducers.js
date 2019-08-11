
const INITIAL_STATE = {
    voterId : '',
    faceData: null,
    user: null,
    error: ''
}

export default (state = INITIAL_STATE, action ) => {
        switch(action.type){
            case 'voterIdChanged' :
                return { ...state, voterId: action.payload };
            case 'faceDataChanged' :
                return { ...state, faceData: action.payload };
            case 'loginSuccess' :
                return { ...state,  ...INITIAL_STATE, user: action.payload }
            case 'loginFail' : 
                return { ...state, error:'login failed'}
            default:
                return state;
        }
}