import { WriterCarousel } from "./(cmps)/writers-carousel"

const Home = () => {
  return <section className="home-page">
    <section className="flex align-center main-title">
      <h1>כותבי התורים</h1>
    </section>

    <section className="main-writers-container">
      <WriterCarousel />
    </section>

  </section>
}

export default Home