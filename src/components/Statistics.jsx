/* eslint-disable react/prop-types */
import Card from "./Card";

const Statistics = ({ data }) => {
  return (
    <div className="row justify-content-center mt-5 text-center">
      <Card header="Products" title={data.products} color="primary" />
      <Card header="Sales" title={data.sales} color="success" />
      <Card header="Revenue" title={data.revenue} color="light" />
    </div>
  );
};

export default Statistics;
