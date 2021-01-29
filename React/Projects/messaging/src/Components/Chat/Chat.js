import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ChatHeader from "../ChatHeader/ChatHeader";
import "./Chat.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "../Messages/Message";
import { selectChannelId, selectChannelName } from "../../features/appSlice";
import { selectUser } from "../../features/userSlice";
import db from "../../fire/firebase";
import firebase from "firebase";

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  function handleChanege(event) {
    event.preventDefault();
    setInput(event.target.value);
  }

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });
    setInput("");
  };
  return (
    <div className="chat">
      <ChatHeader channelId={channelId} channelName={channelName} />
      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            user={message.user}
            message={message.message}
          />
        ))}
      </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input
            placeholder={`Message ${channelName}`}
            disabled={!channelId}
            onChange={handleChanege}
            type="text"
            value={input}
          />
          <button
            type="submit"
            className="chat__inputbutton"
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>
        <div className="chat__inputicons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
