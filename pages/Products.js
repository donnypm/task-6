import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  deleteProduct,
  editProduct,
} from "../redux/actions/productActions";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import AddNewProduct from "./AddNewProduct";

Modal.setAppElement();

const Products = () => {
  const dispatch = useDispatch();
  const allProductsData = useSelector((state) => state.Products);
  const { loading, error, products } = allProductsData;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // UNTUK ADD DATA
  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });
  const [userInput, setUserInput] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    let data = { ...userInput };
    data[e.target.name] = e.target.value;
    setUserInput(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (userInput.title === "",
      userInput.price === "",
      userInput.description === "",
      userInput.image === "",
      userInput.category === "")
    ) {
      return false;
    }

    if (isUpdate.status) {
      dispatch(
        editProduct({
          id: isUpdate.id,
          title: userInput.title,
          price: userInput.price,
          description: userInput.description,
          image: userInput.image,
          category: userInput.category,
        })
      );
      alert("Berhasil Update Product " + userInput.title);
    } else {
      dispatch(
        addProduct({
          title: userInput.title,
          price: userInput.price,
          description: userInput.description,
          image: userInput.image,
          category: userInput.category,
        })
      );
      alert("Berhasil Tambah Product");
    }

    setUserInput({
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
    });
    setIsUpdate({ id: null, status: false });
  };

  const handleEdit = (product) => {
    setUserInput({
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category,
    });
    setIsUpdate({ id: product.id, status: true });
    console.log(product.id);
  };

  return (
    <section>
      <div className="Modal">
        <button onClick={() => setModalIsOpen(true)} className="bn54">
          Add New Product
        </button>
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          style={{
            content: {
              top: "40px",
              left: "140px",
              right: "140px",
              bottom: "40px",
            },
          }}
        >
          <button
            onClick={() => setModalIsOpen(false)}
            style={{ float: "right" }}
            className="button-ud"
          >
            <FontAwesomeIcon
              icon={faWindowClose}
              size="3x"
              style={{ color: "red" }}
            />
          </button>
          <section className="content-product">
            <section className="add-product">
              <h1>Input New Product</h1>
              <div className="form-container">
                <form id="form" className="form">
                  <div className="page">
                    <label className="field field_v3">
                      <input
                        name="title"
                        className="field__input"
                        placeholder="Title.."
                        onChange={handleChange}
                        value={userInput.title}
                      />
                      <span className="field__label-wrap">
                        <span className="field__label">Title</span>
                      </span>
                    </label>

                    <label className="field field_v3">
                      <input
                        name="price"
                        className="field__input"
                        placeholder="Price..."
                        onChange={handleChange}
                        value={userInput.price}
                      />
                      <span className="field__label-wrap">
                        <span className="field__label">Price</span>
                      </span>
                    </label>

                    <label className="field field_v3">
                      <textarea
                        className="text-area"
                        name="description"
                        className="field__input"
                        placeholder="Description..."
                        onChange={handleChange}
                        value={userInput.description}
                      />
                      <span className="field__label-wrap">
                        <span className="field__label">Description</span>
                      </span>
                    </label>

                    <label className="field field_v3">
                      <input
                        name="image"
                        className="field__input"
                        placeholder="Image..."
                        onChange={handleChange}
                        value={userInput.image}
                      />
                      <span className="field__label-wrap">
                        <span className="field__label">Image</span>
                      </span>
                    </label>

                    <label className="field field_v3">
                      <input
                        name="category"
                        className="field__input"
                        placeholder="Category..."
                        onChange={handleChange}
                        value={userInput.category}
                      />
                      <span className="field__label-wrap">
                        <span className="field__label">Category</span>
                      </span>
                    </label>
                  </div>

                  <div className="button">
                    <button
                      className="bn54"
                      type="button"
                      onClick={handleSubmit}
                    >
                      <span className="bn54span">Submit</span>
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </section>
          <br />
        </Modal>
      </div>

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
                      onClick={() => setModalIsOpen(true) & handleEdit(product)}
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
