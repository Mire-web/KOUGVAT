import { SearchResult } from "@/components/SearchResult";

async function getAndValidateCookiesFromApplication() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  // console.log("token", token)
  if(!token) return false
  try {
    const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET_KEY);
    return true
  } catch (err) {
    console.log('err', err)
    return false
  }
}

export default async function Search() {
  const searchResults = await fetch(
    "https://api.npoint.io/db99a097ba2878c3d165",
    {
      cache: "no-store",
    }
  );
  const searchResult = await searchResults.json();
  const isAuth = await getAndValidateCookiesFromApplication();

  return (
    <div>
      <SearchResult searchResult={searchResult} isAuth={isAuth} />
    </div>
  );
}
