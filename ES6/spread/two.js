let user={
    id:101,name:"kiran",email:"kiran@gmail.com"
}
let details={
    location:["ban","kdp","kmp"],
    email:"kiran@tcs.com",
    salary:50000
}
let user_Details={...user,...details}
console.log(user_Details);