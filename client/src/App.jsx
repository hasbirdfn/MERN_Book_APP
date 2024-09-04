import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./routes/Home/home";
import About from "./routes/About/about";
import Book from "./routes/Book/book";
import SingleBook from "./routes/Book/singleBook";
import CreateBook from "./routes/Book/createBook";
import EditBook from "./routes/Book/editBook";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    {/* Struktur body */}
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/books" element={<Book/>}></Route>
      <Route path="/books/:slug" element={<SingleBook/>}></Route>
      <Route path="/createbook" element={<CreateBook/>}></Route>
      <Route path="/editBook/:slug" element={<EditBook/>}></Route>
      </Routes>
      <Footer/>
  </Router>

    </>
  )
}
  
export default App
