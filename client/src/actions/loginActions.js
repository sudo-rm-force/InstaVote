export const voterIdChanged = (text) => {
    return {
        type: voterIdChanged,
        payload: text
    };
}

export const faceDataChanged = (text) => {
    return {
        type: faceDataChanged,
        payload: text
    };
}

// export const loginUser = ({ voterId}, faceData ) => {
//     return (dispatch) => {
//         loginFail(dispatch)
//     };
// }

  const loginFail = (dispatch) => {
    dispatch({ type: loginFail });
  };
  
  const loginSuccess = (dispatch, user) => {
    dispatch({
      type: loginSuccess,
      payload: user
    });
}
