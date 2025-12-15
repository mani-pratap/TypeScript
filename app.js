// npx tsc app.ts --watch
var username = "mani";
var age = 12;
console.log(username);
// lec-2 --------------------------------------------
// primitive DataTypes =>>>>>>>>>>>>>>>>>>>>>>
// number => num:number = 10 ; num:number:10.10
//String => 
//Boolean => true/false 
// null => var data = null  // null is like vacume jaise bottle khali h iska matlab h air to hogi n 
// undefined => unintialize value  => var a:undefined = undefined
// bigint
// Symbol => it generate unique address which besically doesn't match to any other symbol although value is same
//  Object Type =>>>>>>>>>>>>>>>>>>>>>>>>>>
// array -----------------------
// let numberArr:number[] = [1,2,3,4,5];
// let names: Array<string> = ["mani","sunny","bunny"];
// Tuple ([T1,T2,T3...]) -----------------------
// let person: [string,number] = ["anil",30]
// Object --------------
// let user:{name:string,age:number} = {name:"mani",age:27}
// Special Type >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//any ------------
// let data: any = 42;
// data = "hold any value string as well" //no error 
// unknown
// void => aisa fun jo kuch return ni kar rha abhi
// never => fun jo kabhi kuch return nahi karega
// Advance type >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Union types(T|U)
// let value : string | number;
// value = "mani";
// value = 11;
// InterSection Types
// Type Alias
// type Id = string | number;
// let userId:Id = "user123";
// Enum(enum)
// enum Role{
// 	Admin,
// 	user,
// 	guest
// }
// let userRole : Role = Role.Admin
// Literal types
// let direction :"up" | "down"
// direction = "up"
// 5. Function Type -----------------------------------
// let add:(x:number, y:number) =number;
// add = (x,y) => x+y 
