//Obj,Array,Tuple,Enum
//const person:{
//  firstName:string;
//age:number;
//xyz:{
//  address:string;
//}
//}={
//  firstName:"Aditi",
//age:21,
//xyz:{
//  address:"Mumbai",
// }
//};
//console.log(person.firstName);
//!Array
//const person:{
//  firstName:string;
//age:number;
//skills:string[];
//}
//={
//  firstName:"Aditi",
//age:21,
//skills:["Reactjs","Nodejs"]
//};
///console.log(person.skills);
//Tuple
//const person:{
// name:string;
// age:number;
//skills:string[];
//  product:[number,string]
//}={
//  name:"Aditi",
//age:21,
// skills:["React","Node"],
//product :[10,"Mackbook M2"],
//}
//person.product[1]=20;//invalid
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Author"] = 1] = "Author";
    Role[Role["READ_USER_ONLY"] = 2] = "READ_USER_ONLY";
})(Role || (Role = {}));
;
var person = {
    name: "Aditi",
    age: 21,
    skills: ["React", "Node"],
    product: [10, "Mackbook Air M2"],
    role: Role.Admin,
};
if (person.role === Role.Author) {
    console.log("Author");
}
else if (person.role === Role.Admin) {
    console.log("Admin");
}
else if (person.role === Role.READ_USER_ONLY) {
    console.log("read user only");
}
