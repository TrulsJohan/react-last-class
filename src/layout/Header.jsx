import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <header>
                <nav>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/login'}>Login</Link>
                </nav>
            </header>
        </>
    );
}
