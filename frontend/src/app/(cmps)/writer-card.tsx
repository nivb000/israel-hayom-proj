import Image from "next/image"
import Link from "next/link"
// TODO: THE RUNNING TEXT SHOULD BE WRITER LAST POSTS TITLE
export const WriterCard = () => {
    return <article className="flex writer-card">
        <div className="writer-img-container">
            <Link href="/writer-page">
                <Image
                    src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={100}
                    height={100}
                    alt="פרופיל-כתב"
                />
            </Link>
        </div>
        <section className="main-text">
            <h3 className="writer-name">שם כתב מלא</h3>
            <div className="flex col post">
                <p>טקסט רץ טקסט רץ  טקסט רץ טקסט רץ טקסט רץ טקסט רץ טקסט רץ טקסט רץ</p>
                <Link href="/writer-page">
                    <span className="read-more">קרא עוד</span>
                </Link>
            </div>
        </section>
    </article>
}