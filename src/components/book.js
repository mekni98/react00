import React from "react"; // Importation de React

// Le composant Book reçoit la prop `livre` de App
function Book({ livres , title,handleDelete,handleUpdate}) {
  return (
    <div>
      {/* Itération sur le tableau `livre` pour afficher chaque livre */}
      <h2>{title}</h2>
      {livres.map(book => (
        <div> {/* Utilisation de `book.id` comme clé unique pour chaque élément */}
       
          <p>{book.id}::{book.title} : {book.author}   <button onClick={()=>handleDelete(book.id)}>delete</button>     <button onClick={()=>handleUpdate(book)}>Update</button> </p> {/* Affichage du titre du livre */}
        </div>
      ))}
    </div>
  );
}

export default Book; // Exportation du composant Book
