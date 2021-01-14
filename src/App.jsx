import React, { useState, useEffect } from 'react';

import { products } from './data/products';

import Basket from './components/basket';
import ListProduct from './components/listProduct';
import Card from "./components/card";

const App = () => { 

  const [index, setIndex] = useState([0, 5]);
  const [list, setList] = useState([]);
  const [mountTotal, setmountTotal] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [nbItems, setNbItems] = useState(0);
  const [listItems, setlistItems] = useState([]);

  useEffect(() => {
    const listItem = products.slice(index[0], index[1]);
    setList([...listItem]);
  }, [index])

  const onChangeListProduct = (change) => {
    if(change === "next" && index[1] < 100) {
      setIndex([index[0] + 1, index[1] + 1])
    } else if (change === "prev" && index[0] > 0 ) {
      setIndex([index[0] - 1, index[1] - 1])
    } else
      return;
    const listItem = products.slice(index[0], index[1]);
    setList([...listItem]);
  }

  const onChangeProduct = (product) => {
    setSelectedProduct({...product})
  }

  const addNbItems = (product) => {
    const isInList = listItems.includes(product.productId);
    if(!isInList) {
      let count = nbItems; 
      count += 1;
      setNbItems(count);
      setlistItems([...listItems, product.productId])
    }
  }

  const onChangeMountTotal = (product) => {
    addNbItems(product);
    const p = Math.round(product.productPrice * 100) / 100
    //const p = parseFloat(product.productPrice).toFixed(2);
    //console.log("price", p)
    setmountTotal(mountTotal + parseFloat(p));
  }

  return(
    <div className="bg-light px-2" style={{minHeight: "92vh"}}>
      <Basket mount={mountTotal} nbItems={nbItems}/>
      <ListProduct list={list} 
                   changeList={onChangeListProduct} 
                   displayProduct={onChangeProduct}/>
      <Card product={selectedProduct} 
            changeMount={onChangeMountTotal} />
    </div>
  )
}

export default App;
