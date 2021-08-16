function getName(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    if (lastName)
        return firstName + ' ' + lastName;
    return firstName;
}
console.log(getName({ firstName: 'rahul' }));
//5
var arrOfPersonDetails = [];
function PhoneBook(_a) {
    var prefix = _a.prefix, phones = _a.phones, address = _a.address, email = _a.email, firstName = _a.firstName, lastName = _a.lastName, middleName = _a.middleName;
    arrOfPersonDetails.push(arguments[0]);
    console.log('task Done');
}
var obj = {
    prefix: 'prefix',
    phones: [1, 2, 3],
    address: ['a', 'b', 'c'],
    firstName: 'rahul',
    lastName: 'rajput'
};
PhoneBook(obj);
console.log(arrOfPersonDetails);
