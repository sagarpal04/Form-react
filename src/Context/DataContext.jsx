// import { createContext, useState, useContext } from "react";
// import PropTypes from "prop-types";

// // Initial data
// const initialItems = [
//   { id: crypto.randomUUID(), title: "Milk", category: "Grocery", amount: 40 },
//   { id: crypto.randomUUID(), title: "Shirt", category: "Clothes", amount: 600 },
//   {
//     id: crypto.randomUUID(),
//     title: "Vegetables",
//     category: "Grocery",
//     amount: 100,
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "Electricity",
//     category: "Bills",
//     amount: 2500,
//   },
// ];

// // Create context
// const DataContext = createContext();

// // Create a provider component
// export const DataProvider = ({ children }) => {
//   const [items, setItems] = useState(initialItems);

//   return (
//     <DataContext.Provider value={{ items, setItems }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// // Define PropTypes
// DataProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// // Create a custom hook to use the DataContext
// export const useData = () => {
//   return useContext(DataContext);
// };
