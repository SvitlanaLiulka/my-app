import { useRef, useState, } from 'react';
import destroy from '../../assets/img/icon_delete.png';
import change from '../../assets/img/icon_change.png';
import './own-message.css';

const OwnMessage = (props) => {
    const { handleDelete, setInputData, inputData, data, } = props;
    const {text, id, createdAt} = data;
    const myRef = useRef();
    const [changeInput, setChangeInput] = useState(false);
    const [inputText, setInputText] = useState(text);
    const hours = new Date(createdAt).getUTCHours();
    const minute = new Date(createdAt).getUTCMinutes();
    const seconds = new Date(createdAt).getUTCSeconds();

    const handleChange = (e) => {
        setInputText(`${e.target.value}`);
    }

    const handleSave = (data,id) => {
        setChangeInput(true);
        if(changeInput){
            myRef.current.focus();
            data.forEach((item, i, arr) => {
                if(item.id === id){
                    const filtered = arr.filter(item => item.id !== id);
                    setInputData([...filtered,{...item, text: inputText}])
                }
            })
            return setChangeInput(false)
        }
    };

      return (
        <div className="own-message">
            <p className='message-info'>
            <button onClick={() => handleSave(inputData, id)} 
                    className="message-edit">
                <img className='message-img' 
                     src={change} 
                     alt='icon_change'></img>
                </button>
            <button onClick={() => handleDelete(id)} 
                    className="message-delete">
            <img className='message-img' 
                 src={destroy} 
                 alt='icon_destroy'></img>
            </button>
        {changeInput ? <input ref={myRef} 
                              onChange={handleChange} 
                              value={inputText}/> : 
                       <span className="message-text">{text}</span>}
            <span className="message-time">{hours}:{minute}:{seconds}</span>
            </p> 
        </div>
    )
}
export default OwnMessage;
