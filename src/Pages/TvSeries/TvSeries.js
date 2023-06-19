import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleComponent from "../../Component/SingleComponent/SingleComponent";
import CustomPagination from "../../Component/pagination";
import useGenre from "../../hooks/useGenre";
import Genres from "../../Component/Genres/Genres";

export default function TvSeries() {
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);
  const URL = ` https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&page=${page}&with_genres=${genreforURL}`;

  const FetchMovies = async () => {
    const { data } = await axios.get(URL);
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };
  useEffect(() => {
    window.scroll(0, 0);
    FetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, genreforURL]);

  return (
    <>
      <span className="pageTitle">TV SERIES </span>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleComponent
              key={c.id}
              id={c.id}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              title={c.name || c.original_title}
              ratings={c.vote_average}
              poster={c.poster_path}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} totalPage={numOfPages} />
      )}
    </>
  );
}
