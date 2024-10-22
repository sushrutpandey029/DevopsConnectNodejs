import express from "express";

import {adduser, getuser} from '../Controller/UserController.js'

export const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hey Sushrut Pandey how are you!')
})

router.post('/adduser',adduser);
router.get('/getuser',getuser);
