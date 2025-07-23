import Header from "../components/header";
import Home from "./home";

export default function Layout() {
    return (
        <div>
            <main>
                <Header />
                <Home />
            </main>
        </div>
    );
}
