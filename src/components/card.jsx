// src/components/card.jsx
import React from 'react';

const Card = ({product, changeMount}) => {

  return (
    <>
    { product.productId ? (
        <div className="card w-25">
          <img  className="card-img-top" 
                src={product.productImage} 
                alt="mountain landscape" />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{product.productName}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <ul className="list-group list-group-flush mb-2">
              <li className="list-group-item px-0">{product.productCategory}</li>
              <li className="list-group-item px-0">{product.productPrice} €</li>
            </ul>
            <button type="button" 
                    className="btn btn-success ml-auto" 
                    onClick={() => changeMount(product)}>
                    Ajouter
            </button>
          </div>
      </div>
    ) : null}

    </>
  );
};

export default Card;
