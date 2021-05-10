import React from 'react'
import AddNote  from './AddNote'
import NoteView from './NoteView'

class App extends React.Component{


  componentDidMount () {
    const { store }=this.props;
    console.log(store)

    store.subscribe(()=>{
      console.log('state updated', this.props.store.getState())

      console.log("updated");
      this.forceUpdate();
    })

  }

  render(){
    // notesTitle:[],
    //     notesDesc:[]
    // const { Notes }=this.props.store.getState()
    const { notesTitle }=this.props.store.getState()
    const { notesDesc }=this.props.store.getState()
    const { isDraweropen }=this.props.store.getState();
    console.log(this.props.store.getState())
    console.log("notesTitle",notesTitle)
    return (
     <div>
        <AddNote
        isDraweropen={isDraweropen}
        dispatch={this.props.store.dispatch}
        />
      <NoteView 
      notes={notesTitle}
      notesDesc={notesDesc}

      />
     </div>
    );
  }
}

export default App;
