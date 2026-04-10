import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MoviePage from "./pages/Movies/MoviePage.jsx";
import AppLayout from "./layout/AppLayout.jsx";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";


// 홈페이지
// 영화 전체 보여주는 페이지
// 영화 디테일 페이지

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='movies'>
            <Route index element={<MoviePage/>}/>
            <Route path=":id" element={<MovieDetailPage/>}/>
          </Route>

          {/* 일반적인 경우 */}
          {/*<Route path="/movies" element={<MoviePage/>}/>*/}
          {/*<Route path="/movies/:id" element={<MovieDetailPage/>}/>*/}
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
