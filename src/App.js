import './App.css';
import logo from './booklogo2.jpeg'

import BooksContainer from './booksContainer/BooksContainer';


function App() {
  
  return (
    <div className='parent'>
      <nav className='navbar'>
  <img className="logo"src={logo} alt='logo'></img>
  </nav>
     <BooksContainer></BooksContainer>

    </div>
  );
}

export default App;
