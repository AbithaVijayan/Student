import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './Components/AddStudent';
import DeleteStudent from './Components/DeleteStudent';
import SearchStudents from './Components/SearchStudents';
import ShowStudents from './Components/ShowStudents';
import UpdateStudents from './Components/UpdateStudent';
import { Footer } from './FooterComponent/Footer';
import Home from './HomeComponent/Home';
import NavBar from './NavBarComponent/NavBar';

function App() {
  return (
    <div className="App">
    <header>
      <NavBar></NavBar>
    </header>
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/students/showall" element={<ShowStudents/>}></Route>
      <Route path="/students/delete/:id" element={<DeleteStudent/>}></Route>
      <Route path="/students/update/:id" element={<UpdateStudents/>}></Route>
      <Route path="/students/search/:id" element={<SearchStudents/>}></Route>
      <Route path="/students/add" element={<AddStudent/>}></Route>
    </Routes>
    <footer>
      <Footer></Footer>
    </footer>
    </div>
  );
}

export default App;
