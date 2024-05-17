import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((d) => {
        console.log(d);
        setData(d);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <table className="product-table">
        <thead>
          <tr>
            {data &&
              Object.keys(data.products[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.products.map((product, index) => (
              <tr key={index}>
                {Object.values(product).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
