import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/nav'
import Day2 from './day2'
import Day3 from './day3'
import Day4 from './day4'
import Day5 from './day5'
import Day6 from './day6'
import Day7 from './day7'
import Day8 from './day8'
import Day9 from './day9'
import Day10 from './day10'
import data from './components/data'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Day2 name={"ronatio"} job={"peserta"}/>} />
    <Route path="/day3" element={<Day3/>} />
    <Route path="/day4" element={<Day4 data={data}/>} />
    <Route path="/day5" element={<Day5 data={data}/>} />
    <Route path="/day6" element={<Day6/>} />
    <Route path="/day7" element={<Day7/>} />
    <Route path="/day8" element={<Day8/>} />
    <Route path="/day9" element={<Day9 data={data}/>} />
    <Route path="/day10" element={<Day10/>} />
    </Routes>
    </>
    );
}
export default App;
