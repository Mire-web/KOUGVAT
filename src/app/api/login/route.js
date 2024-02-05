import { connectDB } from "@/utils/connect";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req, res) {
  try {
    await connectDB();
    const { email, password } = await req.json();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.error("Wrong Credentials.", 500);
    }
    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect) {
      return NextResponse.error("Wrong Credentials.", 500);
    }
    const tokenData = {
      id: user._id,
    };

    const token = jwt.sign(tokenData, process.env.NEXTAUTH_SECRET_KEY, {
      expiresIn: "30d",
    });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ message: "Login Failed." }, { status: 500 });
  }
}
