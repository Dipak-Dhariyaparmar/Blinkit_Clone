import React, { useEffect, useState } from "react";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import Axios from "../utils/Axios";

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProductData = async () => {
    try {
      const response = await Axios({
        ...SummaryApi.getProduct,
        data: {
          page: page,
        },
      });

      const { data: responseData } = response;

      console.log("product page ", responseData);
      if (responseData.success) {
        setProductData(responseData.data);
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  console.log("product page");
  useEffect(() => {
    fetchProductData();
  }, []);

  return <div>Product</div>;
};

export default Product;

// this component is used to display the product data fetched from the server
// it will be used in the product page
// it will display the product data in a grid format
