const users = require('../modal/userModel'); 
const jwt = require('jsonwebtoken')



exports.registerController = async (req, res)=>{

    const {username, email, password} = req.Body
    
    try {
        const existingUser = await users.findOne({email})
        
        if(existingUser){
            res.status(406).json(`account already exist`)
        }
        else{
            const newUser = new users({
                username,
                email,
                password,
                title:"",
                description:""
            })
            //save to store the data in mongoose
            await newUser.save()
            res.status(200).json(newUser)
        }

    } catch (error) {
        res.status(401).json(`registration filed due to ${error}`)
    }
    
    
}

//login
exports.loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            const token = jwt.sign({userId:existingUser._id},"super")
            res.status(200).json({existingUser,token})
        }
        else{
            res.status(406).json('invalid email id or password')
        }

    } catch(err){
        res.status(401).json(`login failed due to ${err}`)
    }
}