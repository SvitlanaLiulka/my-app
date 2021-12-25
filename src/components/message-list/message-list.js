import './message-list.css'

const MessageList = (props) => {
    return (
        <div className='message-list'>
            {props.children}
        </div>
    )
}
export default MessageList;