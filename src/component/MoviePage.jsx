import React,{useState} from "react";
import banner from "../banner.svg";
import Header from "./header/Header";
import "./MoviePage.css";
import { toast } from "react-toastify";
import http from "../services/httpService";
import Poster from "./Poster";
import poster1 from "../img/img1.jpg";
import poster2 from "../img/img2.jpg";
import poster3 from "../img/img3.jpg";
import poster4 from "../img/img4.jpg";
import poster5 from "../img/img5.jpg";
import poster6 from "../img/img6.jpg";

const MoviePage = () => {
  // const [movies, setMovies] = useState(false);
  const [movie, setMovie] = useState({
    Title: "",
    Poster:""
  });

  const [entry, setEntry] = useState('');

 const  searchMovie = (movie) => {
     http
      .get(
        `http://www.omdbapi.com/?apikey=3f98267d&t=${movie}`
      )
       .done((res) => {
         if (res.Poster.length>5) setMovie(res);
         else toast.error(res.Error);
      })
      .fail((err) => {
        toast.error(err.message);
      });
}

  const handleChange = ({ target }) => {
    setEntry(target.value)
    searchMovie(entry);
  }

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   searchMovie(entry);
  // };

  const pic = [poster1, poster2, poster3, poster4, poster5, poster6];


    return (
      <>
        <div className="container">
          <Header />
          <div className="banner_cover">
            <img src={banner} alt="Banner" />
            <span>Watch something incredible.</span>
          </div>

            <label>Search: </label>
            <br />
            <input
              type="text"
              name="poster"
              value={entry}
              onChange={handleChange}
            />
         
          <br />
          
  {entry.length<1?<div className="images">
            <h3>Action:</h3>
            <Poster pic={pic}/>
          </div>:<div
              className="poster"
              style={{ display: movie.Poster.length < 1 && "none" }}
            >
              <br/>
              <img src={movie?.Poster} alt="Poster" width={100} height={100} style={{marginLeft:"50px"}}/>
            </div>}
          
            
        </div>
      </>
    );
}
export default MoviePage;