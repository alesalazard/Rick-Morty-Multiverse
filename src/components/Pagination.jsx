import "../styles/Pagination.css";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul className='pagination-center'>
        {prev ? (
          <li className='page-item'>
            <button className='page-link' onClick={handlePrevious}>
              Previous
            </button>
          </li>
        ) : null}

        {next ? (
          <li>
            <button onClick={handleNext}>Next</button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};
export default Pagination;
