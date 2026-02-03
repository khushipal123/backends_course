import React, { useState, useEffect } from 'react';
import axios from 'axios';
const App = () => {
  const [notes, setNotes] = useState([
  
  ]);

  function fetchApi(){
       axios.get("http://localhost:3000/notes")
      .then((res) => {
      
        setNotes(res.data.note)
      })
  }
  useEffect(() => {
     fetchApi()
  },[])
  function handlesubmit(e){
    e.preventDefault()
    const {title , description} = e.target.elements
    console.log(title.value ,description.value)
    axios.post("http://localhost:3000/notes",{
      title:title.value,
      description:description.value
    })
    .then( res =>{
      console.log(res.data)
      fetchApi()
    })

  }
function handleDelete(noteId){

    axios.delete(`http://localhost:3000/notes/${noteId}`)
    .then(res=>{
       console.log(res.data)
      fetchApi()

    })
}


  return (
    <>
    <form className='Note-form' onSubmit={handlesubmit}>
      <input name='title' type="text" placeholder='Enter title'  />
      <input name="description" type='text' placeholder='Enter title'  />
     <button type='submit'> Crete Note</button>
    </form>




      <div className="notes">
        {notes.map(note => {
          return <div className="note" id='index'>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <button onClick={()=>{handleDelete(note._id)}}>Delete</button>
          </div>
        })}
      </div>

    </>
  );
};

export default App;