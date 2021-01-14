import React from 'react';

const ProductItem = ({item, selectedProduct}) => {

  return (
    <li className="list-group-item" 
        onClick={() => selectedProduct(item)}
        style={{cursor: 'pointer'}}>
      <span>
        <strong>{item.productName}</strong>
      </span> ({item.productCategory}) 
    </li>
  );
};

export default ProductItem;
