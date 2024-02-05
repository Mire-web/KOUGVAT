import ProfileShow from "@/components/ProfileShow";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

async function getAndValidateCookiesFromApplication() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  // console.log("token", token)
  if (!token) return false;
  try {
    const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET_KEY);
    return true;
  } catch (err) {
    console.log("err", err);
    return false;
  }
}

async function ProfileView({params}) {
	const isAuth = await getAndValidateCookiesFromApplication();
	
	const res = await fetch('https://api.npoint.io/9fb92cd034cca75dafa8', {
		cache:"no-store"
	})
	const result = await res.json();
	const filteredResult = result?.filter((item)=>item.username == params.id)
	const finalRes = filteredResult[0];
  return (
    <div>
      <ProfileShow
        username={finalRes.username}
        description={finalRes.description}
        img={finalRes.img}
        course={finalRes.course}
        occupation={finalRes.occupation}
        joinDate={finalRes.joined}
        isAuth={isAuth}
      />
    </div>
  );
}

export default ProfileView;
