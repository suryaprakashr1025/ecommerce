
import './App.css';
import Card from './card';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Cart from './Cart';
import { useState } from 'react';
function App() {
  const [details,setdetails] =useState(
    [{
      id:1,
      image:"https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/z/r/x/iphone-13-mlph3hn-a-apple-original-imag6vzz4rt8t7gk.jpeg?q=70",
      name:"iphone",
      price:"65000",
    },
    {
      id:2,
      image:"https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/e/e/r/iphone-13-mlpj3hn-a-apple-original-imag6vpykhzqhmgh.jpeg?q=70",
      name:"ipad",
      price:"50000",
    },
   {
      id:3,
      image:"https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/r/2/r/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfcswp9fh5.jpeg?q=70",
      name:"Redmi",
      price:"25000",
   },
   {
      id:4,
      image:"https://rukminim1.flixcart.com/image/416/416/kgiaykw0/mobile/4/b/f/apple-iphone-11-mhdn3hn-a-original-imafwqeps9gkq9zd.jpeg?q=70",
      name:"Realme",
      price:"30000",
   },
   {
      id:5,
      image:"https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/n/p/d/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfwyzztfnh.jpeg?q=70",
      name:"Samsung",
      price:"19000",
   },
   {
      id:6,
      image:"https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/d/g/b/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfhfevaajh.jpeg?q=70",
      name:"Nokia",
      price:"35000",
   }
  ])
  const [empty,fill]=useState([])
  let addtocart=(details)=>{
    fill([...empty,details])
  }
  let removefromcart=(details)=>{
    const remove=empty.findIndex(object => object.id===details.id)
    empty.splice(remove,1)
    fill([...empty])
  }
  return (
    <div className="container-md">
      <div className='row'>
        <div className='col-md-8'>
          <div className='row'>
            {
              details.map((items)=>{
                return (
                <Card items={items} addtocart={addtocart} empty={empty}></Card>
                )
              })
            }
  
          </div>
        </div>
        <div className='col-md-4'>
               <Cart list={empty} removefromcart={removefromcart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
