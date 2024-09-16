import { useState } from "react";
import "./Form.css";
import { useData } from "../Context/DataContext";

function Form() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const { setItems } = useData();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category || !amount) {
      alert("All fields are required!");
      return;
    }

    setItems((prevState) => [
      ...prevState,
      {
        title: title,
        category: category,
        amount: parseFloat(amount), // Convert amount to a number
        id: crypto.randomUUID(),
      },
    ]);
    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          id="category"
          value={category}
          className="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          className="form-input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="submit" className="form-button">
        Add
      </button>
    </form>
  );
}

export default Form;
