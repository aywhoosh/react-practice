import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [items, setItems] = useState([]);
  
  function addItem(title, content) {
    setItems(prevItems => {

      return [...prevItems, {title, content}]

    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item,index) => {
        return index!=id;
      });
    });
  }

  

  return (
    <div>
      <Header />
      <CreateArea 
      onAdd={addItem}
      />
        
      {items.map((item, index) =>
        
          <Note 
          key={index} 
          id={index} 
          title={item.title}
          content={item.content}
          onChecked={deleteItem} 
          /> 
          
      )}
      <Footer />
    </div>
  );
}

export default App;
