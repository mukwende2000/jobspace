const jobsData = [
    {
      poster: {company: 'Cleaning solutions'},
      closing: "2023-06-08",
      datePosted: new Date().toLocaleString(),
      description: `Looking for a living in maid, must be able to do basic
      house chores and act as baby sitter, aged between 20 to 30`,
      location: "Lusaka, Kanyama", 
      salary: '2000',
      contact: 975322344,
      email: 'test@test.com',
      qualification: 'You need to know how to take care of children and have a good heart and love for kids',
      title: "Living in maid",
      type: "Full Time"
      
    },
    {
      poster: {company: 'Cleaning solutions'},
      closing: "2023-06-08",
      datePosted: new Date().toLocaleString(),
      description: `Looking for a living in maid, must be able to do basic
      house chores and act as baby sitter, aged between 20 to 30`,
      location: "Lusaka, Kanyama", 
      salary: '2000',
      contact: 975322344,
      email: 'test@test.com',
      qualification: 'You need to know how to take care of children and have a good heart and love for kids',
      title: "Living in maid",
      type: "Part Time"
      
    },
    {
      poster: {company: 'Cleaning solutions'},
      closing: "2023-06-08",
      datePosted: new Date().toLocaleString(),
      description: `Looking for a living in maid, must be able to do basic
      house chores and act as baby sitter, aged between 20 to 30`,
      location: "Lusaka, Kanyama", 
      salary: '2000',
      contact: 975322344,
      email: 'test@test.com',
      qualification: 'You need to know how to take care of children and have a good heart and love for kids',
      title: "Living in maid",
      type: "Contract"
      
    }
  ]
  

export function retrieveJobs() {
    let jobs;
    
    if (localStorage.getItem('jobs')) {
      jobs = JSON.parse(localStorage.getItem('jobs'))
    } else {
      localStorage.setItem('jobs', JSON.stringify(jobsData))
    }  
}