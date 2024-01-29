import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
	providers: [
		CredentialsProvider({
		  name: "Credentials",
		  credentials: {
			email: "mire",
			password: "uhjijiji"
		  },
		  async authorize(credentials, req) {
			if (!credentials.email || !credentials.password){
				throw new Error('invalid details')
			}
			const user = {id: 1, name:"mire"}
			console.log(credentials)
			console.log("be3ssfnjndkgdf")
			return user;
		  }
		})
	  ],
	  session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 Days
    },
    debug: process.env.NODE_ENV === "development",
})

export {handler as GET, handler as POST};