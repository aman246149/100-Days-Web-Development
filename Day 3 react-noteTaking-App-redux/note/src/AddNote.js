import React from 'react'
import { openDrawer,addNoteTitle,addNoteDescritption } from './actions/action'

class AddNote extends React.Component{
  constructor(props){
    super(props);
    this.state={
      noteTitle:"",
      noteDescription:""
    }
  }

    openNav(val){
        // console.log(val)
        //    this.setState({
        //     isOpenAddNote:val
        // })
        this.props.dispatch(openDrawer(val))
        console.log(val)
      }

      handleOnchange=(e)=>{
        this.setState({
          noteTitle:e.target.value,
        })
        console.log(this.state)
      }

      handleOnForDescriptionchange=(e)=>{
        this.setState({
          noteDescription:e.target.value

        })
        console.log(this.state)
      }

      handleAddNote=()=>{
        let notesArray=[];
        let descArray=[];
        notesArray.push(this.state.noteTitle)
        descArray.push(this.state.noteDescription)

        this.props.dispatch(addNoteTitle(notesArray))
        console.warn("notes array from add notes",notesArray,descArray)
        this.props.dispatch(addNoteDescritption(descArray))
      }

  render(){
      let AddnoteOrNOT=this.props.isDraweropen?<div>
          <input type="text" onChange={this.handleOnchange}></input>
                <br></br>
                <input type="text" onChange={this.handleOnForDescriptionchange}></input>
                <br></br>
                <button className="addnote" onClick={this.handleAddNote}>Add note</button>
      </div>:null;

      let closeOrNot=this.props.isDraweropen? <div className="sidenav-close">
      <button className="close-note" onClick={()=>this.openNav(false)}>close</button>
  </div>:null
    return (
       <div>
            <span style={{fontSize:"30px",cursor:"pointer"}} 
        onClick={()=>this.openNav(true)}>&#9776; ADD NOTE</span>

        <div className={this.props.isDraweropen?"sidenav":".sidenav-close"}>
          
                {AddnoteOrNOT}
           
        </div>

       {closeOrNot}

       </div>
    );
  }
}

export default  AddNote;
