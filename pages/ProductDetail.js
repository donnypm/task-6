import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedProducts,
  removeSelectedProducts,
} from "../redux/actions/productActions";
import Image from "next/image";

const DetailProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.Products);
  const { loading, error, products } = product;

  useEffect(() => {
    if (product.id && product.id !== "") getSelectedProducts(product.id);
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [product.id]);

  return (
    <section>
      <section className="product">
        {loading
          ? "Loading..."
          : error
          ? error.message
          : products.map((product) => (
              <div className="card" key={product.id}>
                <h3>{product.title}</h3>
                <Image
                  src={product.image}
                  alt="A image of product"
                  width={200}
                  height={250}
                />
                <h4>$ {product.price}</h4>
                <h4>{product.category}</h4>
              </div>
            ))}
      </section>
    </section>
  );
};

export default DetailProduct;
