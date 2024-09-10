const userModel = require('../models/userModel');

//login callback
const loginController = async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({email, password});
        if(!user){
            return res.status(404).send("user not found");
        }
        
        return res.status(200).json({
            success:true,
            user,
        });
        
    }
    catch(error){
        console.log("error in login callback");
        res.status(400).json({
            success: false,
            error,
        });
    }    
   
};

//register callback
const registerController = async(req, res) => {
    try{
        const newUser = new userModel(req.body);
        await newUser.save();

        res.status(201).json({
            message: "User registered successfully",
            success: true,
            newUser,
        });
        
    }
    catch (error) {
        console.error("Error in register callback:", error);  // Log full error for debugging
    
        res.status(400).json({
            success: false,
            error
        });
    }
 
};


module.exports = {loginController, registerController};