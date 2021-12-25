import "./header.css";

const Header = ({allMsg, myMsg, partisipans}) => {

    return (
        <ul className="header">
            <li className="header-title">Secret Chat</li>
            <li className="header-users-count">partisipans {partisipans + 1}</li>
            <li className="header-messages-count">messages {allMsg + myMsg}</li>
            <li className="header-last-message-date"> last massange</li>
        </ul>
    )
}

export default Header;

