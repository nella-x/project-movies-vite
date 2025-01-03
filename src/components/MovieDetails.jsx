import PropTypes from 'prop-types';

export const MovieDetails = ({ movie }) => {

  const { title, backdrop_path, overview, poster_path, vote_average } = movie;

  const imageBaseUrl = 'https://image.tmdb.org/t/p/';
  const backdropSize = 'w1280';
  const posterSize = 'w342';

  const backgroundImage = `${imageBaseUrl}${backdropSize}${backdrop_path}`;
  const posterImage = `${imageBaseUrl}${posterSize}${poster_path}`;

  return (
    <>
      <div
        className="backdrop"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-label={`Backdrop for movie: ${title}`}
      ></div>

      <div className="movie-details">
        <img
          src={posterImage}
          alt={`Poster of the movie ${title}`}
          className="poster"
        />

        <div className="movie-info">
          <h1>{title}</h1>
          <p>{overview}</p>
          <div className="rating">
            <span>⭐ {vote_average.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
