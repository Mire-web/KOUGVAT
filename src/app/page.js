import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';

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

export default async function Home() {
  const res = await fetch("https://api.npoint.io/b66a915cb4531f79aada", {
    cache: "no-store",
  });
  const cardRes = await fetch("https://api.npoint.io/5f901d070246022232f2", {
    cache: "no-store",
  });
  const data = await res.json();
  const result = await cardRes.json();
  
  const isAuth = await getAndValidateCookiesFromApplication();

  return (
    <>
      {/* {Header} */}
      <Header isLoggedIn={isAuth}/>
      {/* {Banner} */}
      <Banner />
      {/* {Main} */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="font-semibold pb-5 text-4xl">Accomodations Nearby</h2>
          {/* {Data pulled from server - API endpoints} */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data?.map((item) => (
              <SmallCard
                img={item.img}
                distance={item.distance}
                location={item.location}
                key={item.id}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live VIP Style</h2>
          <div className="flex overflow-scroll scrollbar-hide p-3 -ml-3 space-x-3">
            {result?.map((item) => (
              <MediumCard key={item.id} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="Ifite-Awka"
          description="Get the best accomodations around Unizik"
          buttonText="Book a room"
        />
      </main>
      <Footer />
    </>
  );
}
