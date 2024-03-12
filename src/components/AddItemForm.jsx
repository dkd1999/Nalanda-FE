// AddItemForm.js
import React, { useState } from "react";
import axios from "axios";

const AddItemForm = () => {
  const [businessName, setBusinessName] = useState("");
  const [itemName, setItemName] = useState("");
  const [amtPaid, setAmtPaid] = useState("");
  const [qty, setQty] = useState("");
  const [sellPrice, setSellPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Convert input values to numbers
      console.log("amtPaid:", amtPaid);
      console.log("qty:", qty);
      console.log("sellPrice:", sellPrice);
      const amountPaid = parseFloat(amtPaid);
      const quantity = parseInt(qty);
      const sellingPrice = parseFloat(sellPrice);
  
      // Check if the converted values are valid numbers
      if (isNaN(amountPaid) || isNaN(quantity) || isNaN(sellingPrice)) {
        throw new Error("Invalid input. Please provide valid numbers for amount paid, quantity, and selling price.");
      }
  
      // Calculate cost price, profit, and profit percentage
      const costPrice = amountPaid / quantity;
      const profit = sellingPrice - costPrice;
      const profitPercentage = (profit / costPrice) * 100;
      
      console.log("Data sent to server:", {
        businessName,
        Product: {
          Item: itemName,
          Amt_Paid: amountPaid,
          Qty: quantity,
          Cost_Price: costPrice,
          Selling_Price: sellingPrice,
          Profit: profit,
          "% profit": profitPercentage,
          // Add other item properties here
        },
      });

      // Send the data to the server
      await axios.post("https://nalanda.onrender.com/addItem", {
        businessName,
        Product: {
          Item: itemName,
          Amt_Paid: amountPaid,
          Qty: quantity,
          Cost_Price: costPrice,
          Selling_Price: sellingPrice,
          Profit: profit,
          "% profit": profitPercentage,
          // Add other item properties here
        },
      });
  
      alert("Item added successfully!");
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Failed to add item");
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Business Name"
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount Paid"
        value={amtPaid}
        onChange={(e) => setAmtPaid(e.target.value)}
      />
      <input
        type="text"
        placeholder="Qty"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />
      <input
        type="text"
        placeholder="Selling Price"
        value={sellPrice}
        onChange={(e) => setSellPrice(e.target.value)}
      />
      {/* <button type="submit">Add Item</button> */}
    </form>
  );
};



export default AddItemForm;
