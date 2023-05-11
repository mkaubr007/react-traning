import { useSelector } from "react-redux";
import Constants from '../../../api/Contants';

const CartItems = () => {
  const { Carts, numberCart } = useSelector((state) => state);
  return (
    <div style={{ backgroundColor: "#fff", padding: "20px" }}>
      <h2 className="text-center">Your Cart ({numberCart} items)</h2>

      <table className="table">
        <thead>
          <tr>
            <th colSpan="2">Items</th>
            <th>Price</th>
            <th>Quanity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {Carts.map((item, index) => (
            <tr key={index}>
              <td>
                <img
                  src={ Constants.IMAGE_URL +item.image}
                  alt=""
                  className="img-thumbnail"
                  style={{ width: "120px" }}
                />
              </td>
              <td>
                <h3>{item.productName}</h3>
                <p>{item.unit}</p>
              </td>
              <td>
                <h2>
                  <span>&#8377;</span>
                  {item.price}
                  <span
                    style={{
                      fontSize: "22px",
                      marginLeft: "10px",
                      color: "#888",
                    }}
                  >
                    <del>
                      <span>&#8377;</span>
                      {item.mrp}
                    </del>
                  </span>
                </h2>
              </td>
              <td>
                <h2>{item.quantity}</h2>
              </td>
              <td>
                <h2>
                <span>&#8377;</span>
                {item.price * item.quantity}
                </h2>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CartItems;
