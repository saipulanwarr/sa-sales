/* eslint-disable react/prop-types */
const Card = ({ header, title, color }) => {
  return (
    <div
      className={`card text-bg-${color} mb-3`}
      style={{ maxWidth: "18rem", marginRight: 10 }}
    >
      <div className="card-header">{header}</div>
      <div className="card-body">
        <h1 className="card-title fw-bold">{title}</h1>
        <p className="card-text">Total {header}</p>
      </div>
    </div>
  );
};

export default Card;
