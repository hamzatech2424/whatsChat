const initialState = {
    userAllData : null
}


const LoginReducer = (state = initialState, action) => {


switch(action.type) {

      case "LOGGED_IN_DATA" :
  
      return {
          ...state,
          userAllData:action.payload
      }


    default :return state
}
}

export default LoginReducer