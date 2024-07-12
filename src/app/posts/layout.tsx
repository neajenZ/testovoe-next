'use client'
import {ReactNode} from "react";
import {useStore} from "@nanostores/react";
import {authState} from "@/app/store/auth";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import Header from "../components/header/header";


export default function Layout({ children }: { children: ReactNode }) {
    const { isAuthenticated } = useStore(authState)
    
    if (!isAuthenticated) return redirect('/auth')

    return (
        <div className="container">
            <Header />
            {children}
        </div>
    );
}