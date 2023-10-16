import "../css/blog.css";

export default function Blog({MovieList}) {
  return (
    <main className="mw blog">
      <h2>블로그</h2>

      <ul>
        {
          MovieList.map((list) => {
            return(
              <li>
                <p>영화 제목 : {list.movieNm}</p>
                <p>개봉일 : {list.openDt}</p>
              </li>
            )
          })
        }
      </ul>
    </main>
  );
}
