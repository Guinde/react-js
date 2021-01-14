const Basket = ({mount, nbItems}) => { 
    return(
        <div className="border w-100 h-25 mb-2">
            <h2>Panier</h2>
            <div>
                <p>Nombre d'item : <span className="badge badge-secondary"> {nbItems} </span></p>
                <span className="badge badge-primary">Total : {mount} €</span>
            </div>
        </div>
    )
  }
  
  export default Basket;
  