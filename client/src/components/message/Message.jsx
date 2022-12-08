import "./message.css";
import { format } from "timeago.js";

const Message = ({ message, own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className={"messageImg"}
          src="https://images.pexels.com/photos/14239995/pexels-photo-14239995.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
        <p className={"messageText"}>{message.text}</p>
      </div>
      <div className="messageBottom">{format(message?.createdAt)}</div>
    </div>
  );
};

export default Message;
