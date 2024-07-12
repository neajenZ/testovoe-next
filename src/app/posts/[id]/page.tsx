import styles from './post.module.scss'
import {Metadata} from "next";
import {IPost} from "@/app/posts/model/posts.interface";
import Comments from "@/app/posts/[id]/comments/comments";

interface IProps {
    params: {
        id: string
    }
}



const getData = async (id: string): Promise<IPost> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)
    return response.json()
}

export const generateMetadata = async ({params: {id}}: IProps): Promise<Metadata> => {
    const post = await getData(id)
    return {
        title: post.title,
        description: post.body
    }
}

export default async function PostPage({params}: IProps) {
    const post = await getData(params.id)

    return (
        <div className='container'>
            <div className={styles.body}>
                <h1>{post.title}</h1>
                <section className={styles.wrapper}>
                    <Comments postId={post.id} />
                </section>
            </div>
        </div>
    );
}