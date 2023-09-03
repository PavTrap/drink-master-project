export const writeToLoaclStore = (key, value) =>{
    localStorage.setItem(`${key}`, JSON.stringify(value))
}

export  const readFromLocalStore=(key)=>{
    const res = localStorage.getItem(`${key}`);
    const data =JSON.parse(res)
    return data
}


