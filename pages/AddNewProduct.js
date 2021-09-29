import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, editProduct } from "../redux/actions/productActions";
import Products from "./Products";

const Add_Products = () => {
  const dispatch = useDispatch();

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
      alert("Berhasil EDIT Product");
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
              <button className="bn54" type="button" onClick={handleSubmit}>
                <span className="bn54span">Submit</span>
              </button>
            </div>
          </form>
        </div>
        <Products handleEdit={handleEdit} />
      </section>
    </section>
  );
};

export default Add_Products;
