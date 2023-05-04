const Product = (props) => {
    const {title, image, description} = props.data
  return (
      <div className="col-sm-3">
        <div className="card">
          <img src={image}  className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
  );
};
export default Product;
