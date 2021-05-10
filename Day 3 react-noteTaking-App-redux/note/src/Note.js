import React from 'react'


class Note extends React.Component{
  render(){
    const note=this.props.notes
    const noteDesc=this.props.notesDesc

    return (
      <div style={style.note}>
          <h1>{note}</h1>
          <p>{noteDesc}</p>
      </div>
    );
  }
}

export default Note;


const style={
    note:{
        display:"inline-block",
        borderRadius:"20px",
        backgroundColor:"wheat",
        height:"200px",
        width:"300px",
        textAlign:"center",
        margin:"20px"
    }
}