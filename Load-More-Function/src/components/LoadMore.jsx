import React, { useEffect, useState } from "react";

function LoadMore({ url, limit }) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  async function FetchProducts(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(
        `${getUrl}?limit=${limit}&skip=${count === 0 ? 0 : count * 20}`
      );
      const data = await response.json();

      if (data && data.products) {
        setLoading(false);
        setProduct((prev) => [...prev, ...data.products]);
      }
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    FetchProducts(url);
  }, [url, count],1);

  useEffect(() => {
    product && product.length === 100 ? setDisable(true) : null;
  }, [product]);

  console.log(product);

  if (loading) {
    return <p>Page is loading...</p>;
  }

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
          disabled={disable}
          onClick={() => setCount((prev) => prev + 1)}
          className="load-btn"
        >
          Load More
        </button>
      </div>
      {disable ? <div>You have reached the limit</div> : null}
    </div>
  );
}

export default LoadMore;
