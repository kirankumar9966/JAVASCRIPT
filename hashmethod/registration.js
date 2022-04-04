/*function add(a,...b){
    console.log(b);
}
add(10)
add(10,20)
add(10,20,30,)
add(10,20,30,40)
add(10,20,30,40,50,60)*/

const bcrypt = require('bcryptjs')
let user = {name:"kiran",password:"kiran123",email:"kiran@gmail.com",cc:"13221483428",confirm_password:"8234113252138"}

let salt = bcrypt.genSaltSync(10);
let new_name =bcrypt.hashSync(user.name,salt);
let new_Password = bcrypt.hashSync(user.password , salt);
let new_confirm_password =bcrypt.hashSync(user.confirm_password, salt)
let new_Email = bcrypt.hashSync(user.email , salt);
let new_cc =bcrypt.hashSync(user.cc ,salt);
console.log(user)
let new_user ={...user, cc: new_cc,password:new_Password, email:new_Email,name:new_name,confirm_password:new_confirm_password}
console.log(new_user);


let flag = bcrypt.compareSync("hello123", new_user.password)
flag ? console.log("login success"): console.log("failed");