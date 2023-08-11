import mongoose from "mongoose"

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
    }catch(error){
    }
} 

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})

export default connectDB;
