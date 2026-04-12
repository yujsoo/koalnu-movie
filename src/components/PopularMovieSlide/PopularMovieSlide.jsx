import {usePopularMoviesQuery} from "../../hooks/usePopularMovies.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MovieCard from "../MovieCard/MovieCard.jsx";

const PopularMovieSlide = () => {
  const {data, isLoading, isError, error} = usePopularMoviesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

   return (
       <div className={'content-container'}>
         <h3 className={'section-title'}>Popular Movie</h3>
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

export default PopularMovieSlide