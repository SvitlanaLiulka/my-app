import { useState } from 'react';
import emptyLike from '../../assets/img/like.png';
import redLike from '../../assets/img/like_red.png';
import './message.css';

const Message = (message) => {
    const {avatar, user, text, createdAt} = message.message;
    const [like, setLike] = useState(false);
    const hours = new Date(createdAt).getUTCHours();
    const minute = new Date(createdAt).getUTCMinutes();
    const seconds = new Date(createdAt).getUTCSeconds();
        
    return (
        <div className="message">
            <img className="message-user-avatar" src={avatar} alt='avatar'></img>
            <p className="message-user-info">
            <span className="message-user-name">{user}</span>
            <span className="message-text">{text}</span>
            </p>
            <span className='message-time'>{hours}:{minute}:{seconds}</span>
            <button className='message-like'
                    onClick={() => setLike(!like)}>
               {like ? <img className='message-like-img' src={redLike} alt='like'/> : 
                       <img className='message-like-img' src={emptyLike} alt='like'/> }
            </button>
        </div>
    )
}

export default Message;

