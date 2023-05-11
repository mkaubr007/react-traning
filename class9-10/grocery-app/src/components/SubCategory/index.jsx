import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../../api/Endpoints";
import { useParams } from "react-router-dom";

const SubCategory = () => {
  const {catId, catName} = useParams()
  const [subCategories, setSubCategories] = useState([]);

  const fetchData = () => {
    axios
      .get(Endpoints.SUBCATEGORY_BY_CAT_ID_URL + catId)
      .then((response) => setSubCategories(response.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, [catId]);

  return (
    <div>
      <h2 className="text-center">{ catName }</h2>
      <ul className="list-group">
        {subCategories.map((item) => (
          <li className="list-group-item">{item.subName}</li>
        ))}
      </ul>
    </div>
  );
};
export default SubCategory;