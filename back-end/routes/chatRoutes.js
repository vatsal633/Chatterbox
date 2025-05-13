import express from 'express';
import {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} from '../controllers/chatController.js';
import authenticationJWT from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authenticationJWT, accessChat);
router.get('/', authenticationJWT, fetchChats);
router.post('/group', authenticationJWT, createGroupChat);
router.put('/rename', authenticationJWT, renameGroup);
router.put('/groupadd', authenticationJWT, addToGroup);
router.put('/groupremove', authenticationJWT, removeFromGroup);

export default router;
