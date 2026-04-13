import {useTopReated} from "../../hooks/useTopReated.js";
import MovieSlider from "../../common/MovieSlider/MovieSlider.jsx";

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
        <MovieSlider title={'Top reated'} data={data}/>
      </div>
  )
}

export default TopReated;