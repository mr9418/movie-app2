import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends Component {
  state = {
    isLoading : true, //나는 로딩중이다 표시
  //영화 데이터를 로딩한 다음 movies state에 자료형:배열로 저장된다
   movies:[],
  };
  getMovies =async() =>{
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('http://yts-proxy.now.sh/list_movies.json?sort_by=rating');
      this.setState({ movies , isLoading: false});
    }

  componentDidMount(){
    // //영화데이터 로딩
    // setTimeout(() => {
    //   this.setState({ isLoading : false});
    // }, 6000);
    //api호출
     this.getMovies();   
  }

  render() {
    const {isLoading,movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
           <span className="loader_text">'Loading...'</span>
          </div>
        ):(
        <div className="movies">
        {movies.map(movie => (
         <Movie
          key={movie.id}//콘솔창에러삭제
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          />
        ))}
      </div>
       )}
     </section>
    );
  }
}
export default Home;
