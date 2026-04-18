import './DetailTopMovieInfo.style.css'

const DetailTopMovieInfo = ({data}) => {
  if (!data) return null;

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
      <>
        <div className={'topMovie-info'}>
          <div className="img-box">
            <img
                src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${data?.poster_path}`}
                alt={data.title}
            />
          </div>
          <div className={'detail'}>
            <h3>{data.title}</h3>
            <dl>
              <dt>개봉일</dt>
              <dd>{data.release_date}</dd>
              <dt>국가</dt>
              <dd>{data.origin_country}</dd>
              <dt>상영시간</dt>
              <dd>{data.runtime}분</dd>
              <dt>장르</dt>
              <dd>
                <div className={'tag-box'}>
                  {data.genres?.map((genre) => (
                      <span className={'tag'} key={genre.id}>
                        {genre.name}
                      </span>
                  ))}
                </div>
              </dd>
              <dt>평점</dt>
              <dd>{data.vote_average}</dd>
              <dt>예산</dt>
              <dd>{formatNumber(data.budget)}</dd>
              <dt>제작사</dt>
              <dd><div className={'company'}>
                {data.production_companies.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))}
              </div></dd>
            </dl>
          </div>
        </div>
        <div className={'box overview'}>
          <h4>Description</h4>
          {/* 태그라인 없다면 렌더링 X */}
          {data.tagline && <p className={'tagline'}>{`"${data.tagline}"`}</p>}
          <p>{data.overview}</p>
        </div>
      </>
  )
}

export default DetailTopMovieInfo;