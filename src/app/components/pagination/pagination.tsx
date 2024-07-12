'use client'
import {useRouter, useSearchParams} from "next/navigation";
import styles from './pagination.module.scss'

interface IProps {
    endOf: number,
    hasNextPage: boolean,
    hasPrevPage: boolean
}

export const Pagination = ({endOf, hasNextPage, hasPrevPage}: IProps) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') ?? '1'
    const perPage = searchParams.get('per_page') ?? `${endOf}`

    return (
        <div className={styles.wrapper}>
            <button
                disabled={!hasPrevPage}
                onClick={() => router.push(`/posts?page=${Number(page) - 1}&per_page=${perPage}`)}
            >
                prev
            </button>
            <div className={styles.countPage}>
                { page } / {endOf}
            </div>
            <button
                disabled={!hasNextPage}
                onClick={() => router.push(`/posts?page=${Number(page) + 1}&per_page=${perPage}`)}
            >
                next
            </button>
        </div>
    )
}