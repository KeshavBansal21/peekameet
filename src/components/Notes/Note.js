
import { MdDeleteForever } from 'react-icons/md';

const Note = ({id , text , date})=>{
    console.log("kbf")
    return(
        <div className='note' >
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
            </div>
            <MdDeleteForever className="delete-icon" size='1.3rem'
            ></MdDeleteForever>
        </div>
    )
}

export  default Note;