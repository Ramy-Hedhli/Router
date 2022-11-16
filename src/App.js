import { useState } from 'react';
import './App.css';
import { Nvbar } from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import { Home } from './components/home';
import { Moviedet } from './components/Moviedet';

function App() {
    const [movies,setMovies] = useState([
      {title : "Game of thrones" , description : "In the Game of Thrones, you either win or you die. In the mythical continent of Westeros, nine families of higher nobility (Targaryen, Lannisters, Starks, Tyrell, Martell, Greyjoys, Baratheons and Boltons) scramble bitterly to gain power over the seven kingdoms and the Iron throne." , posterURL : "/images/GOT.jpg" , rating : 4,id : Math.random(),URL : <iframe width="731" height="411" src="https://www.youtube.com/embed/KPLWWIOCOOQ" title="Game of Thrones | Official Series Trailer (HBO)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
      {title : "House of dragon " , description : "House of the Dragon, the prequel to Game of Thrones, is here. Based on George R.R. Martin’s “Fire & Blood,” the series, which is set 200 years before the events of Game of Thrones, tells the story of House Targaryen." , posterURL : "/images/HOD.jpg" , rating : 4,id : Math.random(),URL : <iframe width="731" height="411" src="https://www.youtube.com/embed/Wg86eQkdudI" title="House of the Dragon | Official Teaser Trailer | HBO Max" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
      {title : "The 100" , description : "The 100 follows post-apocalyptic survivors from a space habitat, the Ark, who return to Earth nearly a century after a devastating nuclear apocalypse. The first people sent to Earth are a group of juvenile delinquents who encounter descendants of survivors of the nuclear disaster on the ground." , posterURL : "/images/The100.jpg" , rating : 3,id : Math.random(),URL : <iframe width="731" height="411" src="https://www.youtube.com/embed/aDrsItJ_HU4" title="The 100 - Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    ])
  
    const [searchM,setSearchM] = useState('')
    const [rateM,setRateM] = useState(0)
  return (
    <div>
      <Nvbar/>  
      <br/>
      <Routes>
      <Route path='/' element={<Home movies={movies} setMovies={setMovies} searchM={searchM} setSearchM={setSearchM} rateM={rateM} setRateM={setRateM}/>}/>
      <Route path="/home/:id" element={<Moviedet movies={movies}setMovies={setMovies} />}/>
      </Routes>
    </div>
  );
}

export default App;
