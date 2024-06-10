/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import {
  SalesChart,
  SalesTable,
  SearchBar,
  Statistics,
  DateFilter,
  Button,
  Navbar,
} from "./components";
import customFetch from "./utils/customFetch";
import {
  daysBetween,
  getDataFilter,
  filterData,
  getDataStatistics,
} from "./utils/helpers";

const App = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [startDate, setStartDate] = useState("2024-06-01");
  const [endDate, setEndDate] = useState("2024-06-15");
  const [line, setLine] = useState({
    label: [],
    data: [],
  });
  const [bar, setBar] = useState({
    label: [],
    sales: [],
    revenue: [],
  });
  const [statistics, setStatistics] = useState({
    product: 0,
    sales: 0,
    revenue: 0,
  });

  useEffect(() => {
    getDataChart(startDate, endDate);
  }, []);

  const getDataChart = async (start, end) => {
    const countDays = daysBetween(start, end);
    if (countDays > 30) {
      alert("Maximal 30 days");
      return null;
    }
    let queryParams = "";
    if (search !== "") {
      queryParams = `?product=${search}`;
    }
    const res = await customFetch.get(`/sales${queryParams}`);
    const dataStatistics = getDataStatistics(res.data);
    const dataLine = getDataFilter(res.data, start, end, "line");
    const dataBar = getDataFilter(res.data, start, end, "bar");
    const dataProduct = filterData(res.data, start, end);

    setStatistics({
      products: dataStatistics.products,
      sales: dataStatistics.sales,
      revenue: dataStatistics.revenue,
    });
    setProducts(dataProduct);
    setLine({
      label: dataLine.label,
      dataSales: dataLine.sales,
      dataRevenue: dataLine.revenue,
    });
    setBar({
      label: dataBar.label,
      sales: dataBar.sales,
      revenue: dataBar.revenue,
    });
  };

  const handleSearch = () => {
    getDataChart(startDate, endDate);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row g-3 justify-content-center mt-2 mb-5">
          <SearchBar setSearch={(e) => setSearch(e.target.value)} />
          <DateFilter
            setStartDate={(e) => setStartDate(e.target.value)}
            setEndDate={(e) => setEndDate(e.target.value)}
          />
          <Button handleSearch={() => handleSearch()} />
        </div>
        <Statistics data={statistics} />
        <SalesChart line={line} bar={bar} />
        <SalesTable products={products} />
      </div>
    </div>
  );
};

export default App;
