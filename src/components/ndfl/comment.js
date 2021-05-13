import {Table, TrHeader, TrBody, Td, TextArea} from '../../styles/styledComponents/tables'
import React, { useState } from 'react'


const Comment = ({data}) => {
    
  const [comment, setComment] = useState(data)

  const submit = () => {
    
  }

    return (
 
                  <TextArea
                    onFocus={e=>e.target.style.height='8em'}
                    onBlur={e=>e.target.style.height='1em'}
                    onChange={e=>setComment(e.target.value)}
                    onSubmit={submit}
                  >
                    {comment}
                  </TextArea>
           
    );
}
export default Comment