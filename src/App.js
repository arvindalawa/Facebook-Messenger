import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import { FormControl, InputLabel, Input } from "@mui/material";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";
import { IconButton } from '@mui/material';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({id:doc.id,message:doc.data()})));
      });
  }, []);
  useEffect(() => {
    setUserName(prompt("Please enter a name : "));
  }, []);
  // console.log(input);
  // console.log(messages);
  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      userName: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
     <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/800px-Facebook_Messenger_logo_2020.svg.png"
           width={100} alt="example"
          />
      <h1>Arvind Alawa is going to build Messenger Clone</h1>
      <h2>Welcome {userName}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          {/* <InputLabel>Enter a Message...</InputLabel> */}
          <Input className="app__input" placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton className="app__iconButton" disabled={!input}
            variant="contained"
            type="submit"
            onClick={sendMessage}>
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>
        <FlipMove>
          {messages.map(({id,message}) => (
            <Message key={id} userName={userName} message={message} />
          ))}
        </FlipMove>
    </div>
  );
}

export default App;
