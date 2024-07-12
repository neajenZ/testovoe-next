import Link from "next/link";
import styles from './posts.module.scss'
import {IPost} from "@/app/posts/model/posts.interface";
import {Pagination} from "@/app/components/pagination/pagination";
import {parse} from "cookie";
import {redirect} from "next/navigation";
import {GetServerSideProps} from "next";

interface IProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    },
}

const getData = async (): Promise<IPost[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        cache: 'force-cache'
    })
    return response.json()
}


async function Posts({searchParams}: IProps) {
    const posts = await getData()
    const page = searchParams['page'] ?? '1'
    const perPage = searchParams['per_page'] ?? `${posts.length / 10}`

    const start = (Number(page) - 1) * Number(perPage)
    const end = start + Number(perPage)

    const entries = posts.slice(start, end)

    return (
        <section className={styles.body}>
            <h1>Posts</h1>
            <section className={styles.wrapper}>
                {
                    entries?.map((i: IPost) => (
                        <article key={i.id}>
                            <Link href={`/posts/${i.id}`}>
                                <h3>{i.title}</h3>
                            </Link>
                        </article>

                    ))
                }
            </section>
            <Pagination
                hasNextPage={page < posts.length / 10}
                hasPrevPage={page > 1}
                endOf={posts.length / 10} />
        </section>
    );
}

export default Posts

