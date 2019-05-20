import React,{Component} from 'react';
import './App.css';
import MovieRow from './MovieRow';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("This is my initializer");

  const movies = [
  {id: 0, poster:"https://ewedit.files.wordpress.com/2019/03/end-game-2.jpg", title: "Avengers end game", overview: "yai movie free mai downloiad karo"},
  {id: 1, poster:"https://m.media-amazon.com/images/M/MV5BODdkMDQzMzItZDc4YS00OGM4LTkxNTQtNjUzNzU0ZmJkMWY2XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX182_CR0,0,182,268_AL__QL50.jpg", title: "hellboy", overview: "yai movie free mai downloiad karo"}
  ]

  var movieRows = []
  movies.forEach((movie) => {
    console.log(movie.title)
    const movieRow = <MovieRow movies={movie} />
  movieRows.push(movieRow)
  })

  this.state = {rows: movieRows}

  }

  render(){
    return (
      <div className="App">
      <table className="titleBar">
        <tbody>
          <tr>
            <td>
              <img alt="Icon" width="50" src= "http://icons.iconarchive.com/icons/benjigarner/softdimension/256/Skype-green-icon.png" />
            </td>
            <td width="8">
            <h3>MoviesDB search</h3></td>
          </tr>
        </tbody>
      </table>
      {/* text field */}
      <input className="sear" placeholder="Enter movie name to be search" />
      {this.state.rows}

      </div>
    );
  }
}

export default App;
