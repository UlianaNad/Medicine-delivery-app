import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsThunk } from "../../redux/products/productsThunk.js";
import { toast } from "react-toastify";
import { selectProducts } from "../../redux/products/selectores.js";

const Shops = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  console.log(products);
  useEffect(() => {
    dispatch(fetchProductsThunk())
      .unwrap()
      .catch((error) => toast.error(error.message));
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  return (
    <div>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Shops;
