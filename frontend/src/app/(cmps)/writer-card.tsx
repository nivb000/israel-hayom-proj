import { Post } from "@/interfaces/post"
import { Writer } from "@/interfaces/writer"
import Image from "next/image"
import Link from "next/link"
// TODO: THE RUNNING TEXT SHOULD BE WRITER LAST POSTS TITLE
export const WriterCard = ({ writer, posts }: { writer: Writer, posts: Post[] }) => {

    return <article className="flex writer-card">
        <div className="writer-img-container">
            <Image
                src={writer.imageUrl}
                width={100}
                height={100}
                alt="פרופיל-כתב"
            />
        </div>
        <section className="main-text">
            <Link href={writer.pageUrl} target="_blank" ><h3 className="writer-name">{writer.name}</h3></Link>
            <div className="flex col post">
                {posts.map((post: Post) => <Link href={post.postUrl} key={post._id} className="post-title" target="_blank" >
                 {post.title}
                </Link>
                )}
                <Link href={writer.pageUrl} target="_blank" >
                    <span className="read-more">קרא עוד</span>
                </Link>
            </div>
        </section>
    </article>
}