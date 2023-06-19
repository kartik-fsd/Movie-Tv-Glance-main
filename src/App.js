import "./App.css";
import BottomNavigation from "./Component/BottomNavigation";
import FixedHeader from "./Component/FixedHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import TvSeries from "./Pages/TvSeries/TvSeries";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <FixedHeader />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Trending />} />
              <Route exact path="/Movies" element={<Movies />} />
              <Route exact path="/Tv Series" element={<TvSeries />} />
              <Route exact path="/Search" element={<Search />} />
            </Routes>
          </div>{" "}
          <BottomNavigation />
        </div>
      </Router>
    </>
  );
}

export default App;
