
import React from 'react'

function Cart({list,removefromcart}) {
  return (
    <>
    <h1>Cart</h1>
    {
      list.length===0?<div>No items</div>:
      <>
      <ol class="list-group list-group-numbered">
{
      list.map((list1)=>{
            return (
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
            <div class="fw-bold">{list1.name}</div>
            {list1.price}   
            </div>
            <button onClick={()=>{
              removefromcart(list1)
            }}class="badge bg-primary rounded-pill">X</button>
            </li>
       )})
}
</ol>
<h1>Total:Rs{
            list.reduce((prev,curr)=>{
                return prev=parseInt(prev)+parseInt(curr.price) ;
            },0)
          }
</h1>
    
    </> 
}
  </>
)}
export default Cart;
