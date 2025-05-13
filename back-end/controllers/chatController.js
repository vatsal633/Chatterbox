import Chat from '../models/chatModel.js';
import User from '../models/userModel.js';
import Message from '../models/messageModel.js';

// 1️⃣ Access or create a one-on-one chat
export const accessChat = async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).send({ message: 'UserId param not sent with request' });
  }

  let chat = await Chat.findOne({
    isGroupChat: false,
    users: { $all: [req.user._id, userId] },
  })
    .populate('users', '-password')
    .populate('latestMessage');

  chat = await User.populate(chat, {
    path: 'latestMessage.sender',
    select: 'username email',
  });

  if (chat) return res.send(chat);

  // Create new chat if doesn't exist
  try {
    const newChat = await Chat.create({
      chatName: 'sender',
      isGroupChat: false,
      users: [req.user._id, userId],
    });

    const fullChat = await Chat.findById(newChat._id).populate('users', '-password');
    res.status(200).json(fullChat);
  } catch (err) {
    res.status(500).json({ message: 'Failed to access or create chat', error: err.message });
  }
};

// 2️⃣ Fetch all chats of the user
export const fetchChats = async (req, res) => {
  try {
    const chats = await Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate('users', '-password')
      .populate('groupAdmin', '-password')
      .populate('latestMessage')
      .sort({ updatedAt: -1 });

    const populatedChats = await User.populate(chats, {
      path: 'latestMessage.sender',
      select: 'username email',
    });

    res.status(200).json(populatedChats);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch chats', error: err.message });
  }
};

// 3️⃣ Create a group chat
export const createGroupChat = async (req, res) => {
  const { users, name } = req.body;

  if (!users || !name) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  const parsedUsers = JSON.parse(users);
  if (parsedUsers.length < 2) {
    return res.status(400).json({ message: 'At least 2 users required to form a group' });
  }

  parsedUsers.push(req.user._id);

  try {
    const groupChat = await Chat.create({
      chatName: name,
      isGroupChat: true,
      users: parsedUsers,
      groupAdmin: req.user._id,
    });

    const fullGroupChat = await Chat.findById(groupChat._id)
      .populate('users', '-password')
      .populate('groupAdmin', '-password');

    res.status(201).json(fullGroupChat);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create group chat', error: err.message });
  }
};

// 4️⃣ Rename group chat
export const renameGroup = async (req, res) => {
  const { chatId, chatName } = req.body;

  try {
    const updatedChat = await Chat.findByIdAndUpdate(
      chatId,
      { chatName },
      { new: true }
    )
      .populate('users', '-password')
      .populate('groupAdmin', '-password');

    if (!updatedChat) return res.status(404).json({ message: 'Chat not found' });

    res.json(updatedChat);
  } catch (err) {
    res.status(500).json({ message: 'Failed to rename chat', error: err.message });
  }
};

// 5️⃣ Add user to group
export const addToGroup = async (req, res) => {
  const { chatId, userId } = req.body;

  try {
    const updatedChat = await Chat.findByIdAndUpdate(
      chatId,
      { $push: { users: userId } },
      { new: true }
    )
      .populate('users', '-password')
      .populate('groupAdmin', '-password');

    res.json(updatedChat);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add user to group', error: err.message });
  }
};

// 6️⃣ Remove user from group
export const removeFromGroup = async (req, res) => {
  const { chatId, userId } = req.body;

  try {
    const updatedChat = await Chat.findByIdAndUpdate(
      chatId,
      { $pull: { users: userId } },
      { new: true }
    )
      .populate('users', '-password')
      .populate('groupAdmin', '-password');

    res.json(updatedChat);
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove user from group', error: err.message });
  }
};
