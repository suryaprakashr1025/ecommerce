import React from 'react'

function Cart({list}) {
  return (
    <div>
        {
        list.map((list1)=>{
            return <div>
                <p> {list1.name}</p>
                <p> {list1.price}</p>
                </div>
                   
        })
         }
        
        <h1>Total:Rs.{
            list.reduce((prev,curr)=>{
                return prev=parseInt(prev)+parseInt(curr.price) ;
            },0)


}</h1>
       </div>

  )
}

export default Cart
