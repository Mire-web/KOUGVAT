import { SearchResult } from "@/components/SearchResult";

export default async function Search() {
  const searchResults = await fetch(
    "https://api.npoint.io/db99a097ba2878c3d165",
    {
      cache: "no-store",
    }
  );
  const searchResult = await searchResults.json();

  return (
    <div>
      <SearchResult searchResult={searchResult} />
    </div>
  );
}
