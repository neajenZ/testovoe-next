import Form from "@/app/components/form/form";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'Authorization',
    description: 'Authorization page for the posts page',
}
export default async function Posts() {

    return (
        <div>
            <Form />
        </div>
    );
}