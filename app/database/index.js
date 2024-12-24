import mongoose from "mongoose";

const connectToDB = async () => {
    const connectionUrl = "mongodb+srv://mustafaguzel879:yVPJxbX2BMp7ySJ9@try.rpjsq.mongodb.net/";
    mongoose.connect(connectionUrl).then(() => {
        console.log("blog database connection is successfull");
    })
    .catch((error) => {
        console.log(error);
    })
}
export default connectToDB;