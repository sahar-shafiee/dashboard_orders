// node Libraries
import React, { useState, useEffect, useRef } from 'react';
import IO from 'socket.io-client';

const Chatroom = (props) => {

    let [message, setMessage] = useState([]);

    const socket = useRef(IO.connect("http://localhost:3010/socket"));

    useEffect(() => {
        socket.current.on("newMessage", (message) => {
            setMessage(prev => [...prev, message]);
        })
    }, [socket]);


    const sendMessage = () => {
        let newMessage = document.getElementById("text").value;
        if (!newMessage)
            return;
        socket.current.emit("newMessage", {
            id: "",
            msg: newMessage,
            sender: {
                name: props.location.state.name,
                family: props.location.state.family,
            },
        });
    }

    return (
        <div className="chatroom">
            <div className="chatroom--card">
                <h1 className="chatroom--card__header">chatroom</h1>
                <div className="chatroom--card__chat">
                    {message.length > 0 && message.map((value, index) => {
                        return (
                            <div key={index} className={`${props.location.state.name === value.sender.name ? "shows" : "show-reverse"}`}>
                                <span className="shows--image"> </span>
                                <span className="shows--text">
                                    <small>{value.sender.name} {value.sender.family} </small>
                                    <b> {value.msg} </b>
                                </span>
                            </div>
                        )
                    })}
                </div>
                <form className="form" onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage();
                }}>
                    <input type="text" id="text" />
                    <button type="submit"></button>
                </form>
            </div>
        </div>
    );
}
// export
export default Chatroom;