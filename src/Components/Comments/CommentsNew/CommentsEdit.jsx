import * as React from 'react';
import { productContext } from '../../../Contexts/ProductContext';

import './CommentsStyle/CommentsLIst.css'

export default function CommentsEdit({handleClose, item}) {
    console.log(item.id)
    const [values, setValues] = React.useState({
        body: "",
    })
    const {editStream, editComment, saveEditedComment} = React.useContext(productContext)

    React.useEffect(() => {
        editComment(item.id)
    }, [item.id])

    React.useEffect(() => {
        if(editStream){
            setValues(editStream)
        }
    }, [editStream])


    const handleEditCommentInp = (e) => {
        let obj ={
            ...values,
            [e.target.name]: e.target.value
        }
        setValues(obj)
    }

    const handleSaveComment = () => {
        saveEditedComment({...values, item} )
    }

    function toSave(){
        handleClose()
        handleSaveComment()
        
    }

    return(
        <div>

        <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} action="">
            <textarea
            style={{width: '100%',
                height: '80px',
                marginBottom: '22px',
                marginTop: '8px',
                padding: '10px',
                border: '1px solid rgb(107, 114, 12)'}}
            type="text"
            placeholder="Write new comment about our Agency" 
            name='body'
            onChange={handleEditCommentInp}
            value={values.body}
            />
            <button className='buttonEdit' style={{margin: '10px 0 5px 5px',  marginTop: '1rem',
                        display: 'inline-block',
                        padding:'1rem 3rem',
                        fontSize: '1rem',
                        color: 'green',
                        border: '.2rem solid green',
                        borderRadius: '5rem',
                        cursor: 'pointer',
                        background: 'white'}}  onClick={toSave}> 
                Edit
            </button>
        </form>
    </div>
    );
}