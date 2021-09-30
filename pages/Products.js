import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  deleteProduct,
  sortProducts,
} from "../redux/actions/productActions";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const Products = (props) => {
  const { handleEdit } = props;
  const dispatch = useDispatch();
  const allProductsData = useSelector((state) => state.Products);
  const { loading, error, products } = allProductsData;

  const [sort, setSort] = useState("");

  const handleSort = (e) => {
    console.log(e.target.value);
    setSort({ sort: e.target.value });
  };

  useEffect(() => {
    if (sort === "new") {
      dispatch(sortProducts());
    } else {
      dispatch(getProducts());
    }
  }, []);

  return (
    <section>
      <select onChange={handleSort}>
        <option value="">Sort</option>
        <option value="new">Newest</option>
        <option value="old">Oldest</option>
      </select>

      <section>
        <section className="product">
          {loading
            ? "Loading..."
            : error
            ? error.message
            : products.map((product) => (
                <div className="card" key={product.id}>
                  <div className="card-content">
                    <button
                      onClick={() => handleEdit(product)}
                      className="button-ud"
                    >
                      <FontAwesomeIcon
                        icon={faPen}
                        size="1x"
                        style={{ color: "blue" }}
                      />
                    </button>
                    <button
                      onClick={() =>
                        dispatch(
                          deleteProduct(product.id),
                          alert("Anda Menghapus " + product.title)
                        )
                      }
                      className="button-ud"
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        size="1x"
                        style={{ color: "red" }}
                      />
                    </button>
                    <h3>{product.title}</h3>
                    <div className="card-image">
                      <Image
                        src={product.image}
                        alt="A image of product"
                        width={200}
                        height={250}
                      />
                    </div>
                    <div className="text">
                      <h4>$ {product.price}</h4>
                      <h4>{product.category}</h4>
                    </div>
                  </div>
                </div>
              ))}
        </section>
      </section>
    </section>
  );
};

export default Products;
