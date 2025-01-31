import { Suspense } from "react"
import { WriterCarousel } from "./(cmps)/writers-carousel"

export const dynamic = 'force-dynamic'

const Home = async() => {

  const res = await fetch(`http://backend:5000/writers/sorted`, { cache: 'no-store' })
  const writersData = await res.json()

  return <section className="home-page">
    <section className="flex align-center main-title">
      <h1>כותבי התורים</h1>
    </section>

    <section className="main-writers-container">
      <Suspense fallback={<div>טוען מידע...</div>}>
        <WriterCarousel writersData={writersData} />
      </Suspense>
    </section>

  </section>
}

export default Home