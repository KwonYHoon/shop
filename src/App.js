import "./App.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import Blog from "./pages/Blog";
import Story from "./pages/Story";
import { Route, Routes, Link } from "react-router-dom" ;
import list from "./productData";
import { useState, useEffect } from "react";

function App() {
  let [MovieList, setMovieList] = useState([]);

  /// json 파일 가져오기
  useEffect(()=>{
    fetch("https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=4bc765582315616d174fd80c60016295&targetDt=20230922")
    .then((res) => res.json())
    .then((res) => setMovieList(res.boxOfficeResult.dailyBoxOfficeList))
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element = {<>404 page error</>} />
        <Route path = "/" element = {<Main list = {list}/>}/>
        <Route path="/shop" element={<Shop list = {list}/>}/>
        <Route path="/blog" element={<Blog MovieList = {MovieList}/>}/>
        <Route path="/story" element={<Story/>}/>
        <Route path="/detail/:id" element={<Detail list = {list}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
