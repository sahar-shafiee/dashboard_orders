// node Libraries
import React from 'react';

const Chat = (props) => {
    return (
        <div className="chat">
            <h1>login</h1>
            <form className="chat--form" onSubmit={(e) => {
                e.preventDefault();
                let name = document.getElementById("name").value;
                let family = document.getElementById("family").value;
                props.history.push({
                    pathname: "chatroom",
                    state: {
                        name,
                        family
                    }
                });
            }}>
                <label>first name :
                    <input id="name" type="text" className="chat--form__input" />
                </label>
                <label>last name :
                    <input id="family" type="text" className="chat--form__input" />
                </label>
                <button type="submit" className="chat--form__submit">login</button>
            </form>
        </div>
    );
}
// export
export default Chat;