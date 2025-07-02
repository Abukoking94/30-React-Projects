import React, { useEffect, useState } from "react";

function LoadMore({ url, skip, limit }) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  async function FetchProducts(getUrl) {
    try {
      const response = await fetch(
        `${getUrl}?limit=${limit}&skip=${count === 0 ? 0 : count * 20}`
      );
      const data = await response.json();

      data && data.products
        ? setProduct((prev) => [...prev, ...data.products])
        : null;
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    FetchProducts(url);
  }, [url, count]);
  console.log(product);

  return (
    <div className="container">
      <div className="product-container">
        {product && product.length
          ? product.map((productItem) => {
              return (
                <div className="prod-container" key={productItem.id}>
                  <img src={productItem.thumbnail} alt={productItem.title} />
                  <p> {productItem.title}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="load-btn-cont">
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="load-btn"
        >
          {" "}
          Load More
        </button>
      </div>
    </div>
  );
}

export default LoadMore;
