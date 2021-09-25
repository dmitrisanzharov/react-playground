import React, {} from 'react'; 
import '../css/book.css';


const Book = (props) => {

  
console.log(props)
  const {name, id, title, author} = props;

 



  return       ( 

    <div className='book-wrapper'>

    {id}

    {title}

    {name}
    

    </div>

)
};

export default Book;