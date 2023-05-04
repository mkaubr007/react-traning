import Constants from "../../../api/Contants";
import { Link } from "react-router-dom";
const Category = (props) => {
  const { catId, catName, catImage } = props.data;
  return (
    <div class="col-sm-3">
      <div class="card">
        <img
          src={Constants.IMAGE_URL + catImage}
          className="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{catName}</h5>

          <Link to={ '/products/'+catId +'/'+catName} class="btn btn-primary btn-block">
            Select
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Category;
