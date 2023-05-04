const Employee = (props) => {
    const {id, firstName, lastName, gender, age, email } = props.data;
    return (
        <tr>
            <td>{id}</td>
            {
                gender==='m'?<td>Mr.{firstName} {lastName}</td>: <td>Ms.{firstName} {lastName}</td>
            }
            <td>{gender}</td>
            <td>{age}</td>
            <td>{email}</td>
        </tr>
    )
}
export default Employee;