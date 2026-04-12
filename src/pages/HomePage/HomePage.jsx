import Banner from "../../components/Banner/Banner";
import PopularMovieSlide from "../../components/PopularMovieSlide/PopularMovieSlide.jsx";
import TopReated from "../../components/TopReated/TopReated.jsx";
import UpComing from "../../components/UpComing/UpComing.jsx";

const HomePage = () => {
  return (
      <>
        <Banner/>
        <PopularMovieSlide/>
        <TopReated />
        <UpComing/>
      </>
  )
}

export default HomePage;