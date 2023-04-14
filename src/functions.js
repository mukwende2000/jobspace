export function shortedDescription(fullDesc) {
    const desc = fullDesc.split(" ").slice(0, 14).join(" ") + '...'
    return desc
  }

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