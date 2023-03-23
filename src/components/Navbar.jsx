import '../styles/Navbar.css';

const Navbar = () => {  
  return (
  <nav className='navbar'>
    <div>
      <form className='d-flex' role='search'>
        <input
          className='form-control me-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
        />
        <button className='btn btn-outline-success' type='submit'>
          Search
        </button>
      </form>
    </div>
    <ul className='list'>
      <a href='/' className='decor'><li className='nav-menu'>Home</li></a>
      <a href='#' className='decor'><li className='nav-menu'>Characters</li></a>
      <a href='#' className='decor'><li className='nav-menu'>About</li></a>
    </ul>
  </nav>);
}
export default Navbar;
