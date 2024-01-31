import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Must be provide full name."],
	},
	email: {
		type: String,
		required: [true, "Please Provide email address."],
		unique: [true, "Email already exists."]
	},
	reg_no: {
		type: Number,
		required: [false],
		unique: [true, "User already exists"]
	},
	password: {
		type: String,
		required: [true, "provide password."]
	}
},
{
	timestamps: true
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;