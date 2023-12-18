import { useContext } from "react";
import { MessageContext } from "../../context/messageContext";
import { MessageObjectModel } from "../../context/messageObject";

const MessageRoom = () => {
    const { state } = useContext(MessageContext);
    const arr = JSON.parse(localStorage.getItem("message"));
    console.log(arr);
  return (
    <ul style={{ width: "100px", height: "100px", backgroundColor: "red" }}>
      {!Object.keys(state.messageObj).length != true ? (
              state.getMessageArr.map((obj: MessageObjectModel) => {
                  console.log(obj);
          <li style={{background:"black"}} key={obj.messageId}>{obj.message}</li>;
        })
      ) : (
        <p>Choice a message</p>
      )}
    </ul>
  );
};

export default MessageRoom;