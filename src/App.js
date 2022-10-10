import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/nav'
import Day2 from './pages/day2'
import Day3 from './pages/day3'
import Day4 from './pages/day4'
import Day5 from './pages/day5'
import Day6 from './pages/day6'
import Day7 from './pages/day7'
import Day8 from './pages/day8'
import Day9 from './pages/day9'
import Day10 from './pages/day10'
import Day11 from './pages/day11'
import Day12 from './pages/day12'
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
    <Route path="/day11" element={<Day11/>} />
    <Route path="/day12" element={<Day12/>} />
    </Routes>
    </>
    );
}
export default App;
