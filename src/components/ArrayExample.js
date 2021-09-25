import React, {useState} from 'react'; 
import {data} from './data';

const ArrayExample = () => {


  const [items, setItems] = useState(data); 

  console.log(data); 


  const handleClick = (name) => {

    let newArr = items.filter(v=> v.name !== name);
    setItems(newArr); 

  }

  
    return (
      <React.Fragment>
       
       {items.map(v=> {
         const {id, name} = v;
         return(
           <div key={id}>
             <p>{name}</p>
             <button onClick={()=> handleClick(name)}>remove</button>
             <hr />
           </div>
         )
       })}

       <button onClick={()=> setItems([])}>clear all</button>

      </React.Fragment>
    )
  };
  
  export default ArrayExample;
  