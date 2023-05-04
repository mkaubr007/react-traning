const employee = {
    id: 1,
    name: 'John',
    email: 'john@example.com',
    status: false,
    address: {
        city: 'San Francisco',
        country: 'CA'
    }
}

// const newEmployee = employee;
// newEmployee.status = true;

const newEmployee = {
   ...employee,
}

employee.status = true

console.log(employee)
console.log(newEmployee)