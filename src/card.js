


function Card({items,addtocart}) {
  return (
    
        <div className='col-md-4'>
            <div className="card">
                <img src={items.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                <p className="card-text">MODEL: {items.name}</p>
                <p className="card-text">PRICE: {items.price}</p>
               <button  className="btn btn-primary" onClick={()=>{
               addtocart(items)}}>{items.isEnabled?"Add to cart":"Added to cart"} </button>
              
                
                </div>
              
            </div>
        </div>
   
  )
}

export default Card;