import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();

  console.log(conversations);
  return (
    <div className="py=2 flex flex-col overflow-auto">
      {conversations.map((convo, idx) => (
        <Conversation
          key={convo._id}
          convo={convo}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};

export default Conversations;
