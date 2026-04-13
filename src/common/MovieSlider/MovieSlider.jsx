import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import MovieCard from "../MovieCard/MovieCard.jsx";

const MovieSlider = ({title,data}) => {
  return (
      <>
        <h3 className={'section-title'}>{title}</h3>
        <Swiper
            spaceBetween={30}
            slidesPerView={'auto'}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
          {
            data?.results.map((movie) => (
                <SwiperSlide key={movie.id} className={'movie-slide'}>
                  <MovieCard item={movie}/>
                </SwiperSlide>
            ))
          }
        </Swiper>
      </>
  )
}

export default MovieSlider