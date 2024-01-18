import React, { ChangeEventHandler, useState, useEffect } from "react";
import NoteItem from "./components/NoteItem";
import axios from "axios";

const App = () => {

useEffect(() => {
  
})

  const [notes, setNotes] = useState<{
    id: string;
    title: string;
    description?: string;
  }[]>([])

const [values, setValues] = useState({
    title: "",
    description: ""
  })

const handleChange : ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({target}) => {
  const {name, value} = target;
  setValues({...values, [name]: value})
}

  return (
    
    <div className="max-w-3xl mx-auto font-sans">
      <form onSubmit={async (evt) =>{
        evt.preventDefault();
        const {data} = await axios.post("http://localhost:8000/note/create", {
          title: values.title,
          description: values.description
        })
        setNotes([data.note,...notes])
        setValues({title: '', description: ''})
      }} className=" bg-white shadow-md rounded p-5 space-y-6">
        <h1 className="font-semibold text-2xl text-blue-400 text-center">Notes Application</h1>
        <div>
          {values.title.trim() && values.title.length < 2 ? (
          <p className="text-red-500">Title is to short</p>
          ) : null}
          <input className="w-full border-b-2 border-gray-700 outline-none"
            type="text"
            placeholder="Title"
            onChange={handleChange} 
            value={values.title}
            name="title"
            />
        </div>
        <div>
          <textarea 
          onChange={handleChange} 
          value={values.description}
          name="description"
          className="w-full border-b-2 border-gray-700 outline-none resize-none h-36 " placeholder="Description"></textarea>
        </div>
        <div className="text-center">
          <button 
          onClick={()=>{
            console.log(values)
          }}
          className="bg-blue-400 text-white px-5 py-2 rounded"
          >Submit</button>
        </div>
      </form>
      {/* Note Items */}
      {notes.map((note) => {
        return <NoteItem key={note.title} title={note.title}/>
      })}
      
    </div>
  )
}

export default App;