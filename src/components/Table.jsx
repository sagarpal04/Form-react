import { IonIcon } from "@ionic/react";
import { arrowUp, arrowDown } from "ionicons/icons";
import { useData } from "../Context/DataContext";
import "./Table.css";
import { useState } from "react";

function Table() {
  const { items } = useData();
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("");
  // Calculate the total amount dynamically
  const sortedItems = [...items].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.amount - b.amount;
    } else {
      return b.amount - a.amount;
    }
  });
  const filteredItems = sortedItems.filter(
    (item) => !selectedCategory || item.category === selectedCategory
  );
  const totalAmount = filteredItems.reduce(
    (total, item) => total + item.amount,
    0
  );

  // Handle category selection
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <table className="expense-table">
      <thead className="table-header">
        <tr>
          <th className="table-header-title">Title</th>
          <th className="table-header-category">
            <select className="category-select" onChange={handleCategoryChange}>
              <option value="">All</option>
              <option value="Grocery">Grocery</option>
              <option value="Clothes">Clothes</option>
              <option value="Bills">Bills</option>
              <option value="Education">Education</option>
              <option value="Medicine">Medicine</option>
            </select>
          </th>
          <th className="table-header-amount">
            <span>Amount</span>
            <div className="sort-icons">
              <IonIcon
                icon={arrowUp}
                className="arrows"
                onClick={() => setSortOrder("asc")}
              />
              <IonIcon
                icon={arrowDown}
                className="arrows"
                onClick={() => setSortOrder("desc")}
              />
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="table-body">
        {filteredItems.map((el) => (
          <tr key={el.id}>
            <td className="table-item-title">{el.title}</td>
            <td className="table-item-category">{el.category}</td>
            <td className="table-item-amount">₹{el.amount}</td>
          </tr>
        ))}
      </tbody>
      <tfoot className="table-footer">
        <tr>
          <td colSpan={2} className="table-footer-label">
            Total
          </td>
          <td className="table-footer-total">₹{totalAmount}</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;
