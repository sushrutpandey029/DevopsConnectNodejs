import express from "express";

import {adduser, getuser} from '../Controller/UserController.js'

export const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello thojhvvvhghgh!')
})

router.post('/adduser',adduser);
router.get('/getuser',getuser);