import {Navbar} from "@/app/components/Navbar";

export default function NotFound() {
    return (
        <>
        <Navbar/>
        <div className={'text-4xl text-center my-10'}>
        <h1 className={'font-bold italic'}>This is not the page you are looking for. Please go back.</h1>
        </div>
        </>
    )
}