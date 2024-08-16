import React, { useState } from 'react'; // Assurez-vous d'importer useState

function Med() {

  const[isOn,setIsOn]=useState(false);
  const[name,setName]=useState('');
const handleChange=(event)=>{
  setName(event.target.value);
};

const handleSubmit=(event)=>{
  event.preventDefault();
  console.log(name);
  setName("");
};
const handleClick =()=>{
  setIsOn(!isOn)
}

  return (
    <div>
    <button onClick={handleClick}>{isOn ? "ON" :"OFF"}</button>
    <div>
            <form onSubmit={handleSubmit}> {/* Entourez les éléments avec un formulaire */}

<p>{name}</p>
<input type="text" value={name} onChange={handleChange}/>
<button type="submit"> Submit</button>
</form>
    </div>
    </div>

  );
}

export default Med;
