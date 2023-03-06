import React, { useEffect, useState } from 'react';
import { toDollars } from '../lib';

const styles = {
  product: {
    display: 'block',
    cursor: 'pointer',
  },
  image: {
    height: '300px',
    objectFit: 'contain',
  },
  description: {
    height: '4.5rem',
    overflow: 'hidden',
  },
};

export default function Catalog() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <div className="container">
      <h1>Catalog</h1>
      <hr />
      <div className="row">
        {
  products?.map((product) => (
    <div key={product.productId} className="col-12 col-md-6 col-lg-4">
      <Product product={product} />
    </div>
  ))
        }
      </div>
    </div>
  );
}

function Product({ product }) {
  // eslint-disable-next-line no-unused-vars
  const { productId, name, price, imageUrl, shortDescription } = product;
  /* this anchor should go to product details at `#products?productId=${productId}` */
  return (
    <a
      href=""
      style={styles.product}
      className="text-dark card mb-4 shadow-sm text-decoration-none">
      <img src={imageUrl} className="card-img-top" alt={name} style={styles.image} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-secondary">{toDollars(price)}</p>
        <p className="card-text" style={styles.description}>{shortDescription}</p>
      </div>
    </a>
  );
}
