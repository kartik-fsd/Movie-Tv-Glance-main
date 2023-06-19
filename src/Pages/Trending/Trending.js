import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleComponent from "../../Component/SingleComponent/SingleComponent";
import "./Trending.css";
import CustomPagination from "../../Component/pagination";

function Trending() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;
  useEffect(() => {
    const getTrending = async () => {
      try {
        const { data } = await axios.get(url);
        setContent(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getTrending();
    window.scroll(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <span className="pageTitle">Trending Movies and Tv Series</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleComponent
              key={c.id}
              id={c.id}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              title={c.name || c.original_title}
              ratings={c.vote_average}
              poster={c.poster_path}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </>
  );
}

export default Trending;
