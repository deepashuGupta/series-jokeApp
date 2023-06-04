import HomePage from './Components/HomePage';
import {Route, Routes} from 'react-router'
import Navbar from './Components/Navbar';
import Joke from './Components/Jokes/Joke';
import SeriesSearch from './Components/Series/SeriesSearch';
import StoredSeries from './Components/Series/StoredSeries';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/jokes' element = {<Joke />}/>
        <Route path='/search' element = {<SeriesSearch />}/>
        <Route path='/show' element = {<StoredSeries />}/>
      </Routes>
    </>
  );
}

export default App;
