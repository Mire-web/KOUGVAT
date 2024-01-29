import User from "@/models/userModel";
import { connectDB } from "@/utils/connect";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req){
	try {
		await connectDB();
		const {name, email, reg_no, password} = await req.json();
		const exists = await User.findOne({$or:[{email}, {reg_no}]});
		if(exists){
			return NextResponse.json({message: "Email or Reg number already exists."}, {status: 500});
		}
		const hashedPassword = await bcrypt.hash(password,10);
		await User.create({name, email, reg_no, password:hashedPassword});
		return NextResponse.json({message: "Registration Successful."}, {status: 201});
	} catch (error) {
		return NextResponse.json({message: "Registration Failed."}, {status: 500});
	}
}