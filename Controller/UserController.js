import usermodel from '../Model/UserModel.js';

export const adduser = async(req,res)=>{
    try{

        const {username,phonenumber} = req.body;
        const newuser = await usermodel.create({username,phonenumber})
        res.status(201).json({message:'user created done', user:newuser});

    }catch(err){
        res.status(500).json({ message: 'Error creating user', err });
    }
}

export const getuser = async(req,res)=>{
    try{

       
        const user = await usermodel.findAll();
        res.status(201).json({message:'Alluser', users:user});

    }catch(err){
        res.status(500).json({ message: 'Error geting user', err });
    }
}

