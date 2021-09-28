import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  deleteProduct,
  sortProducts,
} from "../redux/actions/productActions";
import Image from "next/image";

const Products = (props) => {
  const { handleEdit } = props;
  const dispatch = useDispatch();
  const allProductsData = useSelector((state) => state.Products);
  const { loading, error, products } = allProductsData;

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    alert("Berhasil menghapus");
  };

  return (
    <section>
      <section className="product">
        {loading
          ? "Loading..."
          : error
          ? error.message
          : products.map((product) => (
              <div className="card">
                <div className="card-image">
                  <Image
                    src={product.image}
                    alt={product.image}
                    width={200}
                    height={250}
                  />
                </div>
                <div className="text">
                  <h3 key={product.id}>{product.title}</h3>
                  <h4>$ {product.price}</h4>
                  <h4>{product.category}</h4>
                </div>
                <div>
                  <button onClick={() => handleEdit(product)}>Edit</button>
                  <button onClick={() => handleDelete(product.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
      </section>
    </section>
  );
};

export default Products;
