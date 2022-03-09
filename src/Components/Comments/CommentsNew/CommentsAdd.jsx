import { TextField } from '@mui/material';
// import { text } from 'dom-helpers';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { productContext } from '../../../Contexts/ProductContext';


import './CommentsStyle/CommentsLIst.css'

const CommentsAdd = () => {
    const [values, setValues] = useState({
        username: '',
        body: '',
        image: '',
        time: new Date()
    })
    const { createCommentAdd} = useContext(productContext)
    const navigate = useNavigate()
    const handleInp = (e) => {
        let obj = {
            ...values,
            [e.target.name]: e.target.value
        }
        setValues(obj)
    }
    const handleSave = () => {
        if(!values.img)values.image = 'https://neertha.lk/profile/img/pro_pick.png'
        createCommentAdd({...values})
        navigate('')
    }
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <div style={{ width: '100%',  display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{ margin: '10px 0', color: 'aqua'}} className="comment-form-title">Write new review</div>
                    <div className="comments-container-form">
                        <form className='form-text-container'>
                                <textarea className='form-text'
                                    type="text"
                                    placeholder="Write new comment about our Agency" 
                                    name='body'
                                    onChange={handleInp}
                                    value={values.body}
                                />
                        </form>
                        <button className='buttonShow' style={{margin: '10px 0 5px 5px',  marginTop: '1rem',
                        display: 'inline-block',
                        padding:'1rem 3rem',
                        fontSize: '1rem',
                        color: 'aqua',
                        border: '.2rem solid aqua',
                        borderRadius: '5rem',
                        cursor: 'pointer',
                        background: '#222222'}} onClick={handleSave}>Send</button>    
                    </div>
                </div>
            {/* <form action="">
                
                <TextField
                helperText="Please enter your name"
                id="demo-helper-text-aligned"
                label="Name"
                size='small'
                type='text'
                name='username'
                onChange={handleInp}
                value={values.username}
                />
                <TextField
                name='image'
                onChange={handleInp} 
                value={values.image} 
                variant='outlined' 
                label='Фото
                '
                />
                <textarea
                // className="comment-form-textarea"   
                style={{width: '100%',
                    height: '80px',
                    marginBottom: '8px',
                    marginTop: '8px',
                    border: '1px solid rgb(107, 114, 12)'}}
                type="text"
                placeholder="Write new comment about our Agency" 
                name='body'
                onChange={handleInp}
                value={values.body}
                /> */}
                    
            {/* </form> */}
        </div>
       
        
       
    );
};
export default CommentsAdd;