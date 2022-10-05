



function Card({items,addtocart,empty}) {
  return (
    
        <div className='col-md-4'>
            <div className="card">
                <img src={items.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 class="card-title">{items.name}</h5>
                <p className="card-text">Rs.{items.price}</p>
               <button disabled={empty.some(object => object.id === items.id)} className="btn btn-primary" onClick={()=>{
               addtocart(items)}}>Add to cart</button>
                </div>
            </div>
        </div>
  )
}

export default Card;
