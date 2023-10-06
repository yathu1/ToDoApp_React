import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState,useEffect } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';



function App() {
  const [items,setItems] = useState([]);
  
const [newItem,setNewItem] = useState('');
const [search,setSearch] = useState('');

useEffect(()=>{
 setItems(JSON.parse(localStorage.getItem("todo_list")))
},[items])


  const addItem= (item)=>{
      const id= items.length? items[items.length-1].id+1:1;
      const addNewItem = {id,checked:false,item}
      const listItems =[...items,addNewItem]
      setItems(listItems)
      localStorage.setItem("todo_list",JSON.stringify(listItems))
  }

  const handleCheck = (itemId)=>{
   
     const item= items.map((item)=>(item.id===itemId?{...item,checked:!item.checked}:item))
      setItems(item);
      localStorage.setItem("todo_list",JSON.stringify(item))

  }

  const handleDelete =(id)=>{
    const item = items.filter((item)=>(item.id!==id))
    setItems(item);
    localStorage.setItem("todo_list",JSON.stringify(item))
  }

const handleSubmit = (e)=>{
  e.preventDefault()
  if(!newItem) return;
  console.log(newItem);
  addItem(newItem)
  setNewItem('')
  console.log('submitted');
}

  return (
    <div  className='App' >
    
      <Header title="To Do List - 2023"/>
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content 
      items= {items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}

      />
      <Footer
      length={items.length}
      />
    </div>
  );
}

export default App;
