import React from 'react';

import ProductItem from './productItem';

const ListProduct = ({list, changeList, displayProduct, listProductInStock}) => { 

    const changeListProducts = (change) => {
        changeList(change);
    }

    const selectedProduct = (product) => {
        displayProduct(product)

    }

    const handleChecked = (e) => {
        listProductInStock(e.target.checked)
    }

    return(
        <div className="border w-25 h-25 mb-2">
            <div className="d-flex justify-content-between px-2 align-items-center">
                <h2>List Of Products</h2>
                <div className="form-check form-switch d-flex justify-content-between align-items-center">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  onChange={(e) => handleChecked(e)}/>
                    <label className="form-check-label">in Stock</label>
                </div>
            </div>
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
  