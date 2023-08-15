import Student from "../model/student.js";
import bcrypt from "bcryptjs";

const createStudent = async (req,res) => {
    try {
        const {email, password} = req.body;
        
        if(!email || !password){
            return res.status(400).json({message: "All fields required"});
        }
        const emailExist= await Student.findOne({email:email});

        if(emailExist){
            res.status(400).send("Email already exists.");
            return;
        }

        const salt= await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password, salt);
        typeof hashedPassword;
        const newStudent = await Student.create({
            email:email,
            password:hashedPassword
        });

        res.status(200).json(newStudent);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

export{
    createStudent
}