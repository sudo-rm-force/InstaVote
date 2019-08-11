export const voterIdChanged_reg = (text) => {
    return {
        type: voterIdChanged_reg,
        payload: text
    };
}

export const mobileNumChanged = (text) => {
    return {
        type: mobileNumChanged,
        payload: text
    }
}

export const nameChanged = (text) => {
    return {
        type: nameChanged,
        payload: text
    }
}

export const genderSelect = (text) => {
    return {
        type: genderSelect,
        payload: text
    }
}

export const register = ({ voterId, name , mobile_no }) => {
 // call to backend for registration
}

const registerFail = (dispatch) => {
    dispatch({type : registerFail})
}

const registerSuccess = (dispatch) => {
    dispatch({ type : registerSuccess })
}