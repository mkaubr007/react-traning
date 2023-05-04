const employee = {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
    email: 'john@example.com'
}

// let id = employee.id;
// let firstName = employee.firstName
// let lastName = employee.lastName
// let email = employee.email

// const { id, firstName, lastName, email } = employee
const { firstName, lastName } = employee

//const fullName = employee.firstName + ' ' + employee.lastName
const fullName = firstName + ' ' + lastName;
console.log(fullName)