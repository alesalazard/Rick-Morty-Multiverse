// import '../styles/Header.css';
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className='container-fluid header-container col-12'>
      <Navbar />
      {/* <div className="row-2">
        <img id='img-header' src='/public/logo.jpg' alt='logo'/>
      </div> */}
      <div className="row-1">
        <h1>RICK & MORTY</h1>
      </div>
      <div className="row">
        <h2>MULTIVERSE</h2>
      </div> 
    </div>
  );
};
export default Header;
