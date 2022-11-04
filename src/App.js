import { Routes, Route} from 'react-router-dom'
import './App.css';
import About from './pages/About';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Posts from './pages/Posts';
import { Layout } from './components/Layout';
import { SinglePage } from './pages/SinglePage';

function App() {
  return (
    <div className="App">

      <main>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index path='/' element={<Main></Main>} />
            <Route path='/posts' element={<Posts></Posts>}/>
            <Route path='/posts/:id' element={<SinglePage></SinglePage>} />
            <Route path='/about' element={<About></About>} />
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Route>
        </Routes>

      </main>
    </div>
  );
}

export default App;
