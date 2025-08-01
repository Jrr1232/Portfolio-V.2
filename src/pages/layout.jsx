import Header from "../components/header";
import Projects from "../components/projects";
import Resume from "../components/resume";
import Scrolltext from "../components/scrolltext";
import Animation from "../components/animation";
import Flipper from "../components/flipper";
import SocialMedia from "../components/socialmedia";
export default function Layout() {
    return (
        <div>
            <main>
                <Header />
                <Scrolltext text="Projects" />
                <Projects />
                <Animation />
                <Scrolltext text="Resume" />
                <Resume />
                <SocialMedia />

            </main>
        </div>
    );
}
