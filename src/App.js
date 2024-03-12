import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats"

export default function App(){
  const [items,setItems] = useState([]);
  function hadleAdditems(item){
    setItems((items)=>[...items, item]);
  }

  function hadledeleteItem(id){
    setItems(items=>items.filter(item=>item.id !==id))
  }
  function hadleToggle(id){
    setItems((items)=>
    items.map((item)=>item.id===id ? {...item,packed:!item.packed}
    :item));
  }

  function hadleClearList(){
    const confirmed=window.confirm('Are you sure you want to delete items?');
     if(confirmed) setItems([]);
  }
  
  return (
    <div className="app">
       <Logo/>
       <Form  onAddItems={hadleAdditems}/>
       <PackingList  onClearList={hadleClearList} onDeleteItems={hadledeleteItem} Ontoggle={hadleToggle} items={items}/>
       <Stats items={items}/>


    </div>
  )

  
}



function Button (){
  return (
    <button>

      
    </button>
  )
}


