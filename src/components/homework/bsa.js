import { useEffect, useState } from 'react';
import Header from '../header/header';
import { Preloader } from '../preloader/preloader';
import MessageInput from '../message-input/message-input';
import Message from '../message/message';
import MessageList from '../message-list/message-list';
import OwnMessage from '../own-message/own-message';
import './chat.css';

function Chat(props) {
    const [inputData, setInputData] = useState ([]);
    const [lastDateFromOwnMessage, setLastDateFromOwnMessage] = useState('');
    const [msg, setMsg] = useState([]);
    const { url } = props;
    const getLastDateFromDB = msg[msg.length -1];

    //here i use json-server port 8000
    let getData = async () => {
         await fetch(url)
                .then(res => res.json())
                .then(data=> {setMsg(data)})
                .catch(err => console.log(err))
    };

    const countAllPartisipans = (arr) => {
       let res =  arr.map(item => item.userId);
       let uniqId = new Set(res);
        return uniqId.size;
    };

    const partisipans = countAllPartisipans(msg);
   
    useEffect(() => {
        getData();
    },[])

    const handleDelete = (id) => {
       setInputData(inputData.filter(item => item.id !== id))
    }

    return (
        <div className='chat'>
            <Header
                allMsg={msg.length}
                myMsg={inputData.length}
                partisipans={partisipans}
                getLastDateFromDB={getLastDateFromDB}
                lastDateFromOwnMessage={lastDateFromOwnMessage}
                />
            <MessageList>
                {msg && msg.map(item => {
                return <Message message={item} key={item.id}/>;
                })}
            
            {msg.length ? inputData.map((item, i, arr) => {
               return( <OwnMessage
                            key={item.id} 
                            data={item}  
                            handleDelete={handleDelete}
                            setInputData={setInputData}
                            inputData={arr} 
                            />)
            }) : <Preloader/>}
            </MessageList>
                <MessageInput 
                    setLastDateFromOwnMessage={setLastDateFromOwnMessage}
                    inputData={inputData}
                    setInputData={setInputData}
                />            
        </div>
    )
}

export default Chat;