const PaginationHandler = ({ numberOfPages, currentPage, setCurrentPage }) => {
  return (
    <div className="pagination">
      {currentPage > 0 && (
        <button onClick={() => setCurrentPage(currentPage - 1)}>
          Previous
        </button>
      )}

      {[...Array(numberOfPages)].map((_, index) => (
        <button
          className={`${index === currentPage ? "active" : ""}`}
          onClick={() => setCurrentPage(index)}
        >
          {index + 1}
        </button>
      ))}

      {currentPage < numberOfPages - 1 && (
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      )}
    </div>
  );
};

export default PaginationHandler;
