const PaginationHandler = ({ numberOfPages, currentPage, setCurrentPage }) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  return (
    <div className="pagination">
      {currentPage > 0 && <button onClick={handlePrev}>Previous</button>}

      {[...Array(numberOfPages)].map((_, index) => (
        <button
          className={`${index === currentPage ? "active" : ""}`}
          onClick={() => handlePageChange(index)}
        >
          {index + 1}
        </button>
      ))}

      {currentPage < numberOfPages - 1 && (
        <button onClick={handleNext}>Next</button>
      )}
    </div>
  );
};

export default PaginationHandler;
