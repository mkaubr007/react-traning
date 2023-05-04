const Employee = (props) => {
    let{id, name, email} = props;
    return(
        <div>
            <h1>Id: {id} Name: {name} Email: {email}</h1>
        </div>
    )
}
export default Employee;