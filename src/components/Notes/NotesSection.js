import React  ,{useState} from "react";
import { connect } from 'react-redux';
// import NotesList from "./NotesList";
import NoteApp from "./NoteApp";

const NotesSection  = (props , dispatch) =>{
    // console.log(props.notes)
    const [note , setNote] = useState('');
    const [date , setData] = useState('');
    const [time , setTime] = useState('');
    let {  notes } = props
    let {addNotes} = dispatch
    // console.log(dispatch , notes)
    console.log(props)
    let obj = {
        n:note ,
        d:date , 
        t:time
    }

    const notesHandler = (e) =>{
        setNote(e.target.value)
        console.log(note);
    }

    const dateHandler = (e) =>{
        setData(e.target.value);
        console.log(date);
    }

    const timeHandler = (e) =>{
        setTime(e.target.value)
        console.log(time)
    }

    const submitHandler  = ()=>{
        
    }

    
    return(
        // <NotesList></NotesList>
        <NoteApp></NoteApp>
    //    <div className="Add_Notes" onSubmit = {()=>{addNotes(obj)} }>
    //        <form >
    //            <label>Date</label>
    //            <input type="date" value={date} onChange = {dateHandler}></input>
    //            <label>Time</label>
    //            <input type="time"  value = {time} onChange = {timeHandler}></input>
    //            <label>Notes</label>
    //            <input type="text" value={note} onChange = {notesHandler}></input>
    //            <button >Submit</button>
    //        </form>

    //    </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        notes:state.notes.notes
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addNotes: (obj)=> dispatch({type:'ADD' , payload:obj})
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(NotesSection);