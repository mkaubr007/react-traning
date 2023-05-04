const Customer = (props) => {
    const {id, name, email} = props.data;
    return(
        <div>
            <h1>Id: {id} Name: {name} Email: {email}</h1>
        </div>
    )
}
 export default Customer;