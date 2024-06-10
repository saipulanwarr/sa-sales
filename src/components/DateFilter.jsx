/* eslint-disable react/prop-types */
const DateFilter = ({ setStartDate, setEndDate }) => {
  return (
    <>
      <div className="col-auto">
        <label className="col-form-label">Start Date</label>
      </div>
      <div className="col-auto">
        <input type="date" className="form-control" onChange={setStartDate} />
      </div>
      <div className="col-auto">
        <label className="col-form-label">End Date</label>
      </div>
      <div className="col-auto">
        <input type="date" className="form-control" onChange={setEndDate} />
      </div>
    </>
  );
};

export default DateFilter;
