import React, { useState } from "react";
import axios from "axios";
import "../Styles/Autocomplete.css"; // Import your CSS file for styling

const Autocomplete = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleChange = async (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    try {
      const response = await axios.get(
        `https://nalanda.onrender.com/search?q=${inputValue}`
      );
      setProducts(response.data);
      console.log("products", products);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMouseEnter = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  return (
    <div className="autocomplete-container">
      <div className="group">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for products..."
          className="input"
        />
      </div>
      {query.trim() !== "" && (
        <div className="d-flex">
          <div className="table-container">
            <table className="product-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Date</th>
                  <th>Selling Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, idx) => (
                  <tr
                    key={idx}
                    onMouseEnter={() => handleMouseEnter(product)}
                    // onMouseLeave={handleMouseLeave}
                  >
                    <td>{product.Product.Item}</td>
                    <td>{product.Product.Date}</td>
                    <td>{product.Product["Selling Price"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="details">
            <h2>Item Details</h2>

            <p>Select an item to view details</p>

            {hoveredProduct && (
              <div className="details-info">
                <p>Item : {hoveredProduct.Product.Item || "Not Available"}</p>
                <p>
                  Bought from :{" "}
                  {hoveredProduct.Business_Name || "Not Available"}
                </p>
                <p>Date : {hoveredProduct.Product.Date || "Not Available"}</p>
                <p>
                  Selling Price :{" "}
                  {hoveredProduct.Product["Selling Price"] !== undefined &&
                  !isNaN(parseFloat(hoveredProduct.Product["Selling Price"]))
                    ? parseFloat(
                        hoveredProduct.Product["Selling Price"]
                      ).toFixed(2)
                    : "Not Available"}
                </p>
                <p>
                  Cost Price :{" "}
                  {hoveredProduct.Product["Cost Price"] !== undefined &&
                  !isNaN(parseFloat(hoveredProduct.Product["Cost Price"]))
                    ? parseFloat(hoveredProduct.Product["Cost Price"]).toFixed(
                        2
                      )
                    : "Not Available"}
                </p>
                <p>
                  Profit :{" "}
                  {hoveredProduct.Product["Profit"] !== undefined &&
                  !isNaN(parseFloat(hoveredProduct.Product["Profit"]))
                    ? parseFloat(hoveredProduct.Product["Profit"]).toFixed(2)
                    : "Not Available"}
                </p>
                <p>
                  Profit % :{" "}
                  {hoveredProduct.Product["% profit"] !== undefined &&
                  !isNaN(parseFloat(hoveredProduct.Product["% profit"]))
                    ? parseFloat(hoveredProduct.Product["% profit"]).toFixed(2)
                    : "Not Available"}
                </p>

                <p>
                  Quantity :{" "}
                  {hoveredProduct.Product["Qty"] !== undefined &&
                  !isNaN(parseFloat(hoveredProduct.Product["Qty"]))
                    ? parseFloat(hoveredProduct.Product["Qty"]).toFixed(2)
                    : "Not Available"}
                </p>

                {/* Add more details here if needed */}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
