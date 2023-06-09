export function calculatePostAge(datePosted, date) {
    if((date[3]+date[4]) !== (datePosted[3]+datePosted[4])) {
      return (`${+(date[3]+date[4]) - +(datePosted[3]+datePosted[4])} months ago`)
    }
     else if((date[0]+date[1]) !== (datePosted[0]+datePosted[1])) {
      return (`${+(date[0]+date[1]) - +(datePosted[0]+datePosted[1])} days ago`)
    } 
    else if ((date[12]) !== (datePosted[12])) {
      return (`${+(date[12]) - +(datePosted[12])} hours ago`)
    }
    return "Just now"
  }

  export function reducer(state, {type, payload}) {
    switch (type) {
        case "openPopup":
            return {
                ...state, popupIsOpen: true
            }
        case "closePopup":
            return {
                ...state, popupIsOpen: false
            }
        case "openMenu": 
            return {
                ...state, menuIsOpen: true
            }
        case "closeMenu": 
            return {
                ...state, menuIsOpen: false
            }
        case "loginUser": 
            localStorage.setItem('isLoggedIn', JSON.stringify(true))
            return {
                ...state, isLoggedIn: true
            }
            case "logoutUser": 
            localStorage.setItem('isLoggedIn', JSON.stringify(false))
            return {
                ...state, isLoggedIn: false
            }
        case "displayInvalidMessage":
            return {
                ...state, message: "Invalid Password or email"
            }
        case "setCurrentUser": 
             localStorage.setItem('currentUser', JSON.stringify(payload.currentUser))
            return {
                ...state, currentUser: payload.currentUser
            }
        case "setPopupView":
            return {
              ...state, popupView: payload
            }
        default:
            return state;
    }
}



