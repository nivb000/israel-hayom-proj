import { WriterCard } from "./(cmps)/writer-card"

const Home = () => {
  return <section>
    <div className="flex align-center main-title">
      <h1>כותבי התורים</h1>
    </div>
    <WriterCard />
    <WriterCard />
    <WriterCard />
  </section>
}

export default Home