import Employee from "./Employee"

const Employees = () => {
    const data = [
        {id: 1, firstName: 'Jone', lastName:'Doe', gender: 'm', age: 30, email: 'j@gmail.com'},
        {id: 2, firstName: 'Lili', lastName:'Doe', gender: 'f',   age: 30, email: 'm@gmail.com'},
        {id: 3, firstName: 'Smith', lastName:'Doe', gender: 'm',   age: 30, email: 's@gmail.com'}
    ]
    return (
        <div>
            <h2 className="text-center">All Employee</h2>
            <table className="table table-bordered">
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {data.map((employee) => (
                        <Employee key = {employee.id} data={employee}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Employees;