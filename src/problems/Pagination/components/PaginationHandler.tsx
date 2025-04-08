const PaginationHandler = () => {
  return (
    <div className="pagination">
      {[...Array(10)].map((_, index) => (
        <button className={`${index === 0 ? "active" : ""}`}>{index}</button>
      ))}
    </div>
  );
};

export default PaginationHandler;
