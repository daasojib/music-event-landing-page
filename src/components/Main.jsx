import Footer from "./Footer";
import Header from "./Header";
import OurBlog from "./OurBlog";
import TopConcert from "./TopConcert";
import TopSingers from "./TopSingers";
import UpcomingEvent from "./UpcomingEvent";

const Main = () => {
    return (
        <div>
            <Header />
            <TopConcert />
            <UpcomingEvent />
            <TopSingers />
            <OurBlog />
            <Footer/>
        </div>
    );
};

export default Main;