import Avatar from "../photo/avatar.png"

const initialState = {
  name: "",
  age: "",
  picture: Avatar
}

export const userReducer = (state=initialState,action) => {
  switch (action.type) {
    case "SET_USER":
        return {...state,
              name: action.payload.name.first,
              age: action.payload.dob.age,
              picture: action.payload.picture.large
        }
    default:
      return state
  }
}