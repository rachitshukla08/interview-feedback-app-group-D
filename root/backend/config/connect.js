import mongoose from "mongoose";

const connectDB = (uri) => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log(error));
};

export default connectDB;