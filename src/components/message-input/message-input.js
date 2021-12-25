import { useState } from 'react/cjs/react.development';
import { useRef, useEffect } from 'react';
import './message-input.css';

const  MessageInput = (props) => {
   const { setInputData, inputData, setLastDateFromOwnMessage} = props;
   const myRef = useRef(null);
   const [click, setClick] = useState(false);

   const handleClick = () => {
       if(myRef.current.value.length === 0) return;
       setInputData([...inputData, {text: myRef.current.value, id: new Date().getMilliseconds(), createdAt: new Date()},])
       setLastDateFromOwnMessage(new Date())
       myRef.current.value = '';
   }

   useEffect(()=>{
    handleClick();
    setClick(false)
   }, [click])
   
    return (
        <div 
            className="message-input">
            <textarea type='text' 
                className="message-input-text"
                placeholder='message'
                ref={myRef}
                />
            <button 
                onClick={() => setClick(true)}
                className="message-input-button">Send</button>      
        </div> 
    )
}

export default MessageInput;