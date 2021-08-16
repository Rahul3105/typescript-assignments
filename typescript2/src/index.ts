// 1
type name = string;
// 2
type age = number;
// 3
type isFetching = boolean;
//4
let arr: number[] = [1, 2, 4];
//5
let arr2: Array<string> = ['r', 'a', 'h', 'u', 'l'];
//6
let tuple: [string, boolean];
//7

enum prac {
    User,
    SuperUser,
    Admin,
    SuperAdmin,
}
//8
const product = (a: number, b: number) :number =>{
    return a * b
}
product(3, 5)

//9
const divide = (a: number, b: number) :number =>{
    return a / b
}
product(3, 5)
//10
const printFunc = (fullname : string) :void =>  {
    console.log(fullname);
}