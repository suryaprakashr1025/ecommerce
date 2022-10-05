import logo from './logo.svg';
import './App.css';
import Card from './card';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Cart from './Cart';
import { useState } from 'react';
function App() {
  
  const details=[
    {
      image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT7DiMlnKLbthai3duMq_2a2qO0ymAKpBWIul_abwqbywFPPStalSDVwo1u1LzTSQDWfZzHhufDlvyL_9NpziQiq0o0BKyW1Q",
      name:"iphone",
      price:"65000",
      isEnabled:true
    },
    {
      image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT7DiMlnKLbthai3duMq_2a2qO0ymAKpBWIul_abwqbywFPPStalSDVwo1u1LzTSQDWfZzHhufDlvyL_9NpziQiq0o0BKyW1Q",
      name:"ipad",
      price:"50000",
      isEnabled:true
    },
   {
      image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT7DiMlnKLbthai3duMq_2a2qO0ymAKpBWIul_abwqbywFPPStalSDVwo1u1LzTSQDWfZzHhufDlvyL_9NpziQiq0o0BKyW1Q",
      name:"Redmi",
      price:"25000",
      isEnabled:true
   },
   {
      image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT7DiMlnKLbthai3duMq_2a2qO0ymAKpBWIul_abwqbywFPPStalSDVwo1u1LzTSQDWfZzHhufDlvyL_9NpziQiq0o0BKyW1Q",
      name:"Realme",
      price:"30000",
      isEnabled:true
   },
   {
      image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT7DiMlnKLbthai3duMq_2a2qO0ymAKpBWIul_abwqbywFPPStalSDVwo1u1LzTSQDWfZzHhufDlvyL_9NpziQiq0o0BKyW1Q",
      name:"Samsung",
      price:"19000",
      isEnabled:true
   },
   {
      image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT7DiMlnKLbthai3duMq_2a2qO0ymAKpBWIul_abwqbywFPPStalSDVwo1u1LzTSQDWfZzHhufDlvyL_9NpziQiq0o0BKyW1Q",
      name:"Nokia",
      price:"35000",
      isEnabled:true
   }
  ]
  const [empty,fill]=useState([])
  let addtocart=(details)=>{
    fill([...empty,details])
   
  }

  return (
    <div className="container-md">
      <div className='row'>
        <div className='col-md-8'>
          <div className='row'>
            {
              details.map((items)=>{
                return (
                <Card items={items} addtocart={addtocart}></Card>
                )
              })
            }
           
          
          </div>
        </div>
        <div className='col-md-4'>
          
            
               <Cart list={empty}></Cart>
            
          
        
        </div>
      </div>
    </div>
  );
}

export default App;
