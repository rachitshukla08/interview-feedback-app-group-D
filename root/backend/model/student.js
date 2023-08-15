import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    email:{type: String, required: true},
    password:{type: String, required: true}
});

const studentModel= mongoose.model("Student", StudentSchema);

export default studentModel;