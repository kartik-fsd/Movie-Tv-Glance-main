// import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import SingleComponent from "../../Component/SingleComponent/SingleComponent";
// import CustomPagination from "../../Component/pagination";
// import {  ThemeProvider,createTheme } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import { TextField } from "@mui/material";

// function Search() {
//   const [type, setType] = useState(0);
//   const [searchText, setSearchText] = useState("");
//   const [page, setPage] = useState(1);
//   const [content, setContent] = useState([]);
//   const [numOfPages, setNumOfPages] = useState();


//   const darkTheme = createTheme({
//     palette: {
//       mode: "dark",
//       primary: {
//         main: "#fff",
//       },
//     },
//   });

//   const fetchSearch = async () => {
//     try {
//       const { data } = await axios.get(
//         `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
//           process.env.REACT_APP_API_KEY
//         }&language=en-US&query=${searchText}&page=${page}`
//       );
//       setContent(data.results);
//       setNumOfPages(data.total_pages);
//     } catch (error) {
//       console.error(error);
//     }
//   };


//   useEffect(() => {
//     window.scroll(0, 0);
//     fetchSearch();
//     // eslint-disable-next-line
//   }, [type, page]);

//   return (
//     <div>
//       <ThemeProvider theme={darkTheme}>
//         <div className="search" style={{display:'flex' ,margin: '15px 0' }}>
//           <TextField
//             style={{ flex: 1 }}
//             className="searchBox"
//             label="Search"
//             variant="filled"
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <Button
//             onClick={fetchSearch}
//             variant="contained"
//             style={{ marginLeft: 10 }}
//           >
//             <SearchIcon fontSize="large" />
//           </Button>
//         </div>
//         <Tabs
//           value={type}
//           indicatorColor="primary"
//           textColor="primary"
//           onChange={(event, newValue) => {
//             setType(newValue);
//             setPage(1);
//           }}
//           style={{ paddingBottom: 5 }}
//           aria-label="disabled tabs example"
//         >
//           <Tab style={{ width: "50%" }} label="Search Movies" />
//           <Tab style={{ width: "50%" }} label="Search TV Series" />
//         </Tabs>
//       </ThemeProvider>
//       <div className="trending">
//         {content &&
//           content.map((c) => (
//             <SingleComponent
//               key={c.id}
//               id={c.id}
//               poster={c.poster_path}
//               title={c.title || c.name}
//               date={c.first_air_date || c.release_date}
//               media_type={type ? "tv" : "movie"}
//               vote_average={c.vote_average}
//             />
//           ))}
//         {searchText &&
//           !content &&
//           (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
//       </div>
//       {numOfPages > 1 && (
//         <CustomPagination setPage={setPage} numOfPages={numOfPages} />
//       )}
//     </div>
//   );
// };

// export default Search;


import React,{useState,useEffect} from "react";
import { TextField } from "@mui/material";
import {  ThemeProvider,createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SearchIcon from "@mui/icons-material/Search";
import {Tab,Tabs} from "@mui/material";
import axios from "axios";
import CustomPagination from "../../Component/pagination";
import SingleComponent from "../../Component/SingleComponent/SingleComponent";

 export default function Search(){
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
 
    const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&page=${page}`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
      }, [type, page]);

    const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  return(
      <div>
       <ThemeProvider theme={darkTheme}>
         <div className="search" style={{display:'flex' ,margin: '15px 0' }}>
          
           <TextField
             style={{ flex: 1 }}
            className="searchBox"
             label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}/>
            <Button variant="contained"tyle={{ marginLeft: 10 }} onClick={fetchSearch}><SearchIcon fontSize="large" /></Button>
          </div>
          </ThemeProvider>
          <Tabs value={type} indicatorColor="primary" textColor="primary" onChange={(event, newValue) => {
             setType(newValue);
             setPage(1);
             }} style={{ paddingBottom: 5 }}>
          <Tab style={{ width: "50%" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search TV Series"  />
        </Tabs>
        <div className="trending">
        {content &&
          content.map((c) => (
            <SingleComponent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={type ? "tv" : "movie"}
                            vote_average={c.vote_average}
                          />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} totalPage={numOfPages} />
      )}
    </div>

)}