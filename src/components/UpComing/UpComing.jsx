import {useUpComing} from "../../hooks/useUpComing.js";
import MovieSlider from "../../common/MovieSlider/MovieSlider.jsx";

const UpComing = () => {
  const {data, isLoading, isError, error} = useUpComing();
  console.log(data)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
      <div className={'content-container'}>
        <MovieSlider title={'upcomming movie'} data={data}/>
      </div>
  )
}

export default UpComing;