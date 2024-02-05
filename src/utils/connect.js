import mongoose from "mongoose";

export async function connectDB() {
	if(mongoose.connections[0].readyState) return;
	try{
		await mongoose.connect(process.env.MONGO_URI);
		console.log('Mongoose Connected Successfully')
	} catch (error) {
		console.log("Error while connecting to mongoose...", error)
		throw new Error("Error while connecting to mongoose...");
	}
}