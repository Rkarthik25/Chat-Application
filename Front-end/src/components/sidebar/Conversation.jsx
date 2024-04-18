import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ convo, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(convo._id);

  const isSelected = selectedConversation?._id === convo._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-950 rounded p-1 py-1 cursor-pointer
    ${isSelected ? "bg-sky-500" : ""}
    `}
        onClick={() => setSelectedConversation(convo)}
      >
        <div className={`avatar ${isOnline ? "online" : " "} `}>
          <div className="w-12 rounded-full">
            <img src={convo.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{convo.fullName} </p>
            <span className="text-xl">🗨</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
