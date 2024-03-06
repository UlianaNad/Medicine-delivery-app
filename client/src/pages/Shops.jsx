import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsThunk } from "../redux/products/productsThunk.js";
import { toast } from "react-toastify";
import { selectProducts } from "../redux/products/selectors.js";
import { selectDrugstore } from "../redux/drugstores/selectors.js";
import { fetchDrugstoreThunk } from "../redux/drugstores/drugstoreThunk.js";

const Shops = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const drugstore = useSelector(selectDrugstore);
  console.log(products, drugstore);

  useEffect(() => {
    dispatch(fetchProductsThunk())
      .unwrap()
      .catch((error) => toast.error(error.message));
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchDrugstoreThunk())
      .unwrap()
      .catch((error) => toast.error(error.message));
    dispatch(fetchDrugstoreThunk());
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
