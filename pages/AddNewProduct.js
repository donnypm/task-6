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
      alert("Berhasil EDIT Product " + userInput.title);
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
        <h1> New Product or Update Product</h1>
        <div className="form-container">
          <form id="form" className="form">
            <div className="page">
              <div className="form__group field">
                <input
                  type="input"
                  className="form__field"
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                  value={userInput.title}
                />
                <label className="form__label">Title</label>
              </div>
              <div className="form__group field">
                <input
                  type="input"
                  className="form__field"
                  placeholder="Price"
                  name="price"
                  onChange={handleChange}
                  value={userInput.price}
                />
                <label className="form__label">Price</label>
              </div>
              <div className="form__group field">
                <input
                  type="input"
                  className="form__field"
                  placeholder="Description"
                  name="description"
                  onChange={handleChange}
                  value={userInput.description}
                />
                <label className="form__label">Description</label>
              </div>
              <div className="form__group field">
                <input
                  type="input"
                  className="form__field"
                  placeholder="Image"
                  name="image"
                  onChange={handleChange}
                  value={userInput.image}
                />
                <label className="form__label">Image</label>
              </div>
              <div className="form__group field">
                <input
                  type="input"
                  className="form__field"
                  placeholder="Category"
                  name="category"
                  onChange={handleChange}
                  value={userInput.category}
                />
                <label className="form__label">Category</label>
              </div>
            </div>

            <div className="button">
              <button className="bn54" type="button" onClick={handleSubmit}>
                <span className="bn54span">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Add_Products;
