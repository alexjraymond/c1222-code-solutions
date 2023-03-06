import React, { useEffect, useState } from 'react';
import { toDollars } from '../lib';

const styles = {
  image: {
    width: '100%',
    height: '350px',
    objectFit: 'contain',
  },
  longDescription: {
    whiteSpace: 'pre-wrap',
  },
};

export default function ProductDetails({ productId }) {
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);

  if (!product) return null;
  const {
    name, imageUrl, price, shortDescription, longDescription,
  } = product;
  return (
    <div className="container">
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            <div className="col">
              {/* this anchor should go back to the catalog at '#' */}
              <a href="" className="btn text-secondary">
                &lt; Back to catalog
              </a>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-sm-6 col-md-5">
              <img src={imageUrl} alt={name} style={styles.image} />
            </div>
            <div className="col-12 col-sm-6 col-md-7">
              <h2>{name}</h2>
              <h5 className="text-secondary">{toDollars(price)}</h5>
              <p>{shortDescription}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p style={styles.longDescription}>
                {longDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
