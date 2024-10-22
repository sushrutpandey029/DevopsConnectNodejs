import express from "express";

import {adduser, getuser} from '../Controller/UserController.js'

export const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hey good morning frahan sir!')
})

router.post('/adduser',adduser);
router.get('/getuser',getuser);
