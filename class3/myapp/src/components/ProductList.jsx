import Product from "./Product"

const ProducList = () => {
    return(
        <div>
            <h2 className="text-center">All product</h2>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Pid</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Mrp</th>
                    </tr>
                </thead>
                <tbody>
                    <Product pid = '1' name = 'Laptop' price = '32000' mrp = '35000' />
                    <Product pid = '1' name = 'Laptop' price = '32000' mrp = '35000' />
                    <Product pid = '1' name = 'Laptop' price = '32000' mrp = '35000' />
                    <Product pid = '1' name = 'Laptop' price = '32000' mrp = '35000' />
                </tbody>
            </table>
        </div>
    )
}
export default ProducList;