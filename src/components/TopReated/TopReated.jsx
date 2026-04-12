import {useTopReated} from "../../hooks/useTopReated.js";
import {Swiper, SwiperSlide} from "swiper/react";
import MovieCard from "../MovieCard/MovieCard.jsx";

const TopReated = () => {
  const {data, isLoading, isError, error} = useTopReated();
  console.log(data)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
      <div className={'content-container'}>
        <h3 className={'section-title'}>Top reated</h3>
        <Swiper
            spaceBetween={30}
            slidesPerView={'auto'}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
          {
            data?.results.map((movie,index) => (
                <SwiperSlide key={index} className={'movie-slide'}>
                  <MovieCard item={movie}/>
                </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
  )
}

export default TopReated;