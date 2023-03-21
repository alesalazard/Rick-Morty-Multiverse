import '../styles/Pagination.css';

const Pages = ({onPrevious, onNext}) => {
  const handlePrevious = () => {
    // alert('click previous')
    onPrevious();
  };

  const handleNext = () => {
    // alert('click next')
    onNext();
  };
 
  return (
    <nav>
      <ul className='pagination-center'>
        <li className='page-item'>
          <button className='page-link' onClick={handlePrevious}><i className="bi bi-caret-left arrow-icon"></i></button>
        </li>
        <li>
          <button onClick={handleNext}><i className="bi bi-caret-right arrow-icon"></i></button>
        </li>
      </ul>
    </nav>
  );
};
export default Pages;
