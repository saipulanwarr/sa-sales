/* eslint-disable no-unused-vars */
export const daysBetween = (start, end) => {
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const differenceMs = Math.abs(new Date(start) - new Date(end));

  return Math.round(differenceMs / ONE_DAY);
};

export const filterData = (data, startDate, endDate) => {
  let result = data.filter((item) => {
    let date = new Date(item.date);
    return date >= new Date(startDate) && date <= new Date(endDate);
  });

  return result;
};

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "decimal",
    currency: "IDR",
  }).format(number);
};

export const getDataStatistics = (data) => {
  let sales = 0;
  let revenue = 0;
  let products = 0;
  let result = Object.groupBy(data, ({ product }) => product);
  let res = Object.entries(result);
  products = res.length;

  res.map((item) => {
    if (item[1].length > 1) {
      for (let i = 0; i < item[1].length; i++) {
        sales += item[1][i].sales;
        revenue += item[1][i].revenue;
      }
    } else {
      sales += item[1][0].sales;
      revenue += item[1][0].revenue;
    }
  });
  products = rupiah(products);
  sales = rupiah(sales);
  revenue = rupiah(revenue);

  return { products, sales, revenue };
};

export const getDataFilter = (data, startDate, endDate, type) => {
  let label = [];
  let sales = [];
  let revenue = [];
  let result;

  let filter = filterData(data, startDate, endDate);
  if (type == "line") {
    result = Object.groupBy(filter, ({ date }) => date);
  } else {
    result = Object.groupBy(filter, ({ product }) => product);
  }
  let res = Object.entries(result);

  res.map((item) => {
    let newDate = new Date(item[0]).getDate();
    let countSales = item[1][0].sales;
    let countRevenue = item[1][0].revenue;
    if (item[1].length > 1) {
      countSales = 0;
      countRevenue = 0;
      for (let i = 0; i < item[1].length; i++) {
        countSales += item[1][i].sales;
        countRevenue += item[1][i].revenue;
      }
    }

    if (type == "line") {
      label.push(newDate);
    } else {
      label.push(item[0]);
    }

    sales.push(countSales);
    revenue.push(countRevenue);
  });

  return { label, sales, revenue };
};
