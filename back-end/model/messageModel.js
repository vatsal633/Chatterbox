const messageSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "userlogin" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "chat" },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "userlogin" }],
}, { timestamps: true });

const message = mongoose.model("message", messageSchema);
export default message;
