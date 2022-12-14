import "./conversation.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Conversations = ({ conversation, currentUser }) => {
  const [user, setUser] = useState();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios.get(`/users?userId=${friendId}`);
        setUser(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  return (
    <div className={"conversation"}>
      <img
        src={
          user?.profilePicture
            ? user.profilePicture
            : `${PF}person/noAvatar.png`
        }
        alt=""
        className="conversationImg"
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
};

export default Conversations;
