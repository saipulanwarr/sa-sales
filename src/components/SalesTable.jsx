/* eslint-disable react/prop-types */
const SalesTable = ({ products }) => {
  return (
    <div className="mt-3">
      <div className="fs-2 mb-2">Product</div>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>No</th>
            <th>Product</th>
            <th>Date</th>
            <th>Sales</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.product}</td>
              <td>{product.date}</td>
              <td>{product.sales}</td>
              <td>{product.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
