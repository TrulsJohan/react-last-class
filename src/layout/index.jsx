import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom"

export function Layout(){
    return (
        <>
            <Header />
            <main className="grow">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
