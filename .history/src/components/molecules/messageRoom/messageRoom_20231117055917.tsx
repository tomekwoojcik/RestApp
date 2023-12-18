import { useContext } from "react";
import { MessageContext } from "../../context/messageContext";
import { MessageObjectModel } from "../../context/messageObject";
import { any } from "prop-types";

const MessageRoom = () => {
    const { state } = useContext(MessageContext);
    const arr = JSON.parse(localStorage.getItem("message"));
    console.log(arr[0].messagesArr);
  return (
    <ul style={{ width: "100px", height: "100px", backgroundColor: "red" }}>
      {/* {!Object.keys(state.messageObj).length != true ? (
              state.getMessageArr.map((obj: MessageObjectModel) => {
                  console.log(obj);
          <li style={{background:"black"}} key={obj.messageId}>{obj.message}</li>;
        })
      ) : (
        <p>Choice a message</p>
      )} */}
          {arr[0].messagesArr.map((obj:any)=>{<li key={obj.messageId}></li>})}
    </ul>
  );
};

export default MessageRoom;