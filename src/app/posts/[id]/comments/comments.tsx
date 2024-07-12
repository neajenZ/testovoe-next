'use client'
import {useEffect, useState} from "react";
import styles from './comments.module.scss'
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;

interface IProps {
    postId: string | number
}

export default function Comments({postId}: IProps) {
    const [comments, setComments] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const getData = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/comments`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const comm = await response.json()
            setComments(comm)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [postId]);

    if (loading) {
        return <p className={styles.loader}>Please wait...</p>
    }

    return (
        <div className={styles.body}>
            <h4>Comments</h4>
            <div className={styles.wrapper}>
                {
                    comments.length > 0 ? comments.map((i) => (
                        <div className={styles.commentCard} key={i.id}>
                            <h3>{i.name}</h3>
                            {i.body}
                        </div>
                    )) : <p>No comments</p>
                }
            </div>

        </div>
    );
}