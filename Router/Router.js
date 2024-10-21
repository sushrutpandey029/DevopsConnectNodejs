import express from "express";

import {adduser, getuser} from '../Controller/UserController.js'

export const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello sushrut how are you! where is you soulmate')
})

router.post('/adduser',adduser);
router.get('/getuser',getuser);
