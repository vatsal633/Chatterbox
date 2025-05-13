import mongoose from "mongoose";

const chatSchema = mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        users: [{ type: mongoose.Schema.Types.ObjectId, ref: "userlogin" }],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "message",
        },
        groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "userlogin" },
    },
    { timestamps: true }
);

const Chat = mongoose.model("chat",chatSchema)
export default Chat