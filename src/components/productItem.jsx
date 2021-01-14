import React from 'react';

const ProductItem = ({item, selectedProduct}) => {

const selectProduct = product => {
  selectedProduct(product)
}
  
  return (
    <li className="list-group-item" 
        onClick={() => selectProduct(item)}
        style={{cursor: 'pointer'}}>
      <span>
        <strong>{item.productName}</strong>
      </span> ({item.productCategory}) 
    </li>
  );
};

export default ProductItem;
