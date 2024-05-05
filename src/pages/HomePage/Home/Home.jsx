import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div className="mt-10">
            <div>
                <Banner />
            </div>
            <div className="mt-8">
                <About />
            </div>
            <div>
                <Services />
            </div>
        </div>
    );
};

export default Home;