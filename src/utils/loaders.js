export async function jobsLoader() {
    const response = await JSON.parse(localStorage.getItem("jobs")) 
    return response
}

export async function jobLoader({ params }) {
    const response = JSON.parse(localStorage.getItem("jobs"))
    const resData = response[params.jobId]
    return resData
}

export async function profileLoader() {
    const data = await JSON.parse(localStorage.getItem('newUser')) 
    return data;
}
  