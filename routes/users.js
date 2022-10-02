import express from 'express';

import {createUser, getUsers, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

let users = [];

router.get('/',getUsers);

router.post('/', createUser);

router.delete('/:id', deleteUser )
    
router.patch('/:id', updateUser)

 export default router;