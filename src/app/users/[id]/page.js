import ProfileShow from "@/components/ProfileShow";

async function ProfileView({params}) {
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
	  />
	</div>
  )
}

export default ProfileView;
