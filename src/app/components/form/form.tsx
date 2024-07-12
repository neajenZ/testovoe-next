'use client'
import { login } from '../../store/auth';
import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import styles from './form.module.scss'




const Form = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const user = login(username, password)
        if (user) router.replace('/posts')
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default Form;