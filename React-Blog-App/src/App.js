import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Navbar from './Navbar'
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import ArticleListPage from './pages/ArticleListPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="App">
        <h1>My Blog App</h1>
        <div id="page-body">
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/about' element={<AboutPage/>}/>
              <Route path='/lists' element={<ArticleListPage/>}/>
              <Route path='/lists/:id' element={<ArticlePage/>}/>
              <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </div>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
