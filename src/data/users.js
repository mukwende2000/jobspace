const usersData = [
    {
    username: "Faith H",
    email: "faith@faith.com",
    password: "0000",
    confirmation: "0000",
    location: "Lusaka",
    company: "Technocraft",
    dateCreated: "19/05/2023, 13:45:56",
    isLoggedIn: true,
    jobs:[]
  }
]

export function retrieveUsers() {
  let users
  if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'))
    } else {
      localStorage.setItem(('users'), JSON.stringify(usersData))
    }
}