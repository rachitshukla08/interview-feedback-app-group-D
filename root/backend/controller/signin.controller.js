import bcrypt from "bcryptjs";
import Student from "../model/student.js";

const checkStudent= async (req,res) => {
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({message: "All fields required"});
        }

        const student = await Student.findOne({email});
        
        if(!student){
            res.status(400).send("user not registered");
            return;
        }

        const isMatch= await bcrypt.compare(password, student.password);

        if(!isMatch){
            res.status(400).send("Enter correct password");
        }

        res.status(200).send("Logged in");
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

export {checkStudent};