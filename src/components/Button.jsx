/* eslint-disable react/prop-types */
const Button = ({ handleSearch }) => {
  return (
    <div className="col-auto">
      <button onClick={handleSearch} className="btn btn-primary btn-sm">
        Search
      </button>
    </div>
  );
};

export default Button;
