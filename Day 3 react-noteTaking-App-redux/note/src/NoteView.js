import React from 'react'
import Note from './Note'

class NoteView extends React.Component{

  render(){
    const notes=this.props.notes
    const notesDesc=this.props.notesDesc
    console.log(notes,notesDesc,"from notes daata")
    return (
      <div style={{backgroundColor:"black"}}>
        {
          notes.map((note,index)=>{
            return  <Note
            notes={note}
            notesDesc={notesDesc}
            key={index}
            />
          })
        }
         
       
      </div>
    );
  }
}

export default NoteView;
