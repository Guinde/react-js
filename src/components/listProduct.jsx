import React from 'react';

import ProductItem from './productItem';

const ListProduct = ({list, changeList, displayProduct}) => { 

    const changeListProducts = (change) => {
        changeList(change);
    }

    const selectedProduct = (product) => {
        displayProduct(product)

    }

    return(
        <div className="border w-25 h-25 mb-2">
            <h2>List Of Products</h2>
            <ul className="list-group">
                { list.length ? (
                    <>
                        { list.map((item, index) => (
                            <ProductItem key={index} item={item} selectedProduct={selectedProduct}/>
                        ))}
                    </>
                ) : null}
            </ul>
            <hr />
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-secondary mr-2" onClick={() => changeListProducts('prev')}>Previous</button>
                <button type="button" className="btn btn-secondary" onClick={() => changeListProducts('next')}>Next</button>
            </div>
        </div>
    )
  }
  
  export default ListProduct;
  