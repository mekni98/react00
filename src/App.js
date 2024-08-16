import './App.css';
import React, { useState } from "react"; // Importation du hook useState depuis React
import Book from './components/book'; // Importation du composant Book

function App() {
  // Déclaration de l'état `livre` avec un tableau de livres, et une fonction `setLivre` pour mettre à jour cet état
  const [livre, setLivre] = useState([
    { id: 1, title: "Clean Code", author: "Robert Cecil Martin" }, // Livre 1
    { id: 2, title: "Design Patterns", author: "Erich Gamma" },    // Livre 2
    { id: 3, title: "medmed ", author: "meknimekni" },    // Livre 2

  ]);
const [title,setTitle]=useState('');
const [author,setAuthor]=useState('')
const [idBook,setIdbook]=useState('')
const [isEdit,setIsEdit]=useState(false)
  const handleDelete =(id)=>{

    const newbooksafterdelete=livre.filter(book=>book.id !==id);
    setLivre(newbooksafterdelete);
  }

  const handleUpdate=(livre)=>{
    console.log(livre)
    setTitle(livre.title);
    setAuthor(livre.author);
    setIdbook(livre.id);
    setIsEdit(true);
  };
  const handleSave=()=>{

    console.log("save")
    const updatedBooks = livre.map(book =>
      book.id === idBook ? { ...book, title, author } : book
    );
    setLivre(updatedBooks);
    console.log(updatedBooks)
    // Réinitialiser les champs après modification
    setTitle('');
    setAuthor('');
    setIsEdit(false)

  
  }

  const addbook=()=>{
    const newbook={
    id:livre.length +1,
    title:title,
    author:author
}
/*livre.push(newbook) deconsillé de l utiliser*/
setLivre([...livre, newbook]);
setAuthor('')
setTitle('')
console.log(newbook)
  }
  return (
    <div>
   {isEdit ? <div>

<h2>update book</h2>

<label>title:</label>
<input type='text' value={title} onChange={(event)=>setTitle(event.target.value)}/>

<label>author:</label>
<input type='text' value={author} onChange={(event)=>setAuthor(event.target.value)}/>

<button onClick={handleSave}>save</button>
    </div> : 
    <div>
      <h2>Add new book</h2>
      <label>title:</label>
<input type='text' value={title} onChange={(event)=>setTitle(event.target.value)}/>

<label>author:</label>
<input type='text' value={author} onChange={(event)=>setAuthor(event.target.value)}/>
<button onClick={addbook}>add</button>

      
      </div>}
    <div>
      {/* Passage de la prop `livre` au composant Book */}
      <Book livres={livre} title="all books here 1" handleDelete={handleDelete} handleUpdate={handleUpdate} /> 
      <Book livres={livre.filter((livre)=>livre.author=="Erich Gamma")} title="all books of Erich Gamma" /> 


      
      </div>
    </div>
  );
}

export default App; // Exportation du composant App
