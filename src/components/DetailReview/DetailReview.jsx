import {useMovieReviewsQuery} from "../../hooks/useMovieReviews.js";
import {useParams} from "react-router-dom";
import './DetailReview.style.css'
import {useState} from "react";

const DetailReview = () => {
  const { id } = useParams();

  const {data, isLoading, isError, error} = useMovieReviewsQuery({movieId: id});
  const [openReviews, setOpenReviews] = useState({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  console.log(data)

  const getProfileImage = (avatarPath) => {
    if (!avatarPath) return "";

    // TMDB 이미지
    return `https://image.tmdb.org/t/p/w45${avatarPath}`;
  };

  const DefaultProfile = ({ name }) => {
    return (
        <div className="default-profile">
          {name?.charAt(0)}
        </div>
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  };

  const toggleReview = (id) => {
    setOpenReviews(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
      <div className={'box reviews'}>
        <h4>Reviews</h4>

        {data?.results?.length === 0 ? (
            <div className={'no-review'}>
              등록된 리뷰가 없습니다.
            </div>
            ) : (
            <div className={'review_list'}>
              {data?.results?.map(review => {
                const isOpen = openReviews[review.id];
                const content = review.content ?? "";

                return (
                    <div key={review.id} className={'list-item'}>
                      <div className={'reviewers'}>
                        {review.author_details?.avatar_path ? (
                            <div className={'reviewer'}>
                              <img
                                  className="review-user-img"
                                  src={getProfileImage(review.author_details.avatar_path)}
                                  alt="user"
                              />
                            </div>
                        ) : (
                            <DefaultProfile name={review.author} />
                        )}
                        <p className={'author'}>{review.author}</p>
                      </div>
                      <p className={`content ${isOpen ? "open" : ""}`}>
                        {content}
                      </p>
                      {content && (
                          <button
                              className="more-btn"
                              onClick={() => toggleReview(review.id)}
                          >
                            {isOpen ? "접기" : "더보기"}
                          </button>
                      )}
                      <span className={'date'}>
                        {formatDate(review.created_at)}
                      </span>
                    </div>
                );
              })}
            </div>
        )}
      </div>
  )
}

export default DetailReview;