import { Suspense } from "react"
import { WriterCarousel } from "./(cmps)/writers-carousel"


const Home = async() => {

  const res =  await fetch('http://localhost:3000/writers/sorted')
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