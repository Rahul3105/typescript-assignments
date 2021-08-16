//1
interface obj{
    title: string,
    status: boolean,
    id: number
}
//2
interface userName {
    firstName: string,
    lastName?: string
}
function getName({ firstName, lastName }: userName): string {
    if (lastName) return firstName + ' ' + lastName
    return firstName;
}
// console.log(getName({firstName : 'rahul'}))

//3

interface Address {
    houseNumber: number,
    street: string,
    city: string,
    state: string,
    postalCode: number,
    country: string,
}
//4

interface PersonDetails {
    prefix?: string,
    phones: number[],
    address: string[],
    email?: string,
    firstName: string,
    lastName: string,
    middleName?: string,
}
//5

let arrOfPersonDetails = []


function PhoneBook({
    prefix,
    phones,
    address,
    email,
    firstName,
    lastName,
    middleName
}: PersonDetails): void {
    arrOfPersonDetails.push(arguments[0]);
    console.log('task Done')
}
let obj = {
    prefix: 'prefix',
    phones: [1, 2, 3],
    address: ['a', 'b', 'c'],
    firstName: 'rahul',
    lastName:'rajput'
}
PhoneBook(obj)
// console.log(arrOfPersonDetails)