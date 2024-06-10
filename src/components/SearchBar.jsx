/* eslint-disable react/prop-types */
const SearchBar = ({ setSearch }) => {
  return (
    <div className="col-auto">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        onChange={setSearch}
      />
    </div>
  );
};

export default SearchBar;
