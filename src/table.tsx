import React from "react";
import DataTable from "react-data-table-component";

type Row = {
  title: string;
  year: string;
};

const columns = [
  {
    name: "Title",
    selector: (row: Row) => row.title,
  },
  {
    name: "Year",
    selector: (row: Row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

function Table() {
  return <DataTable columns={columns} data={data} />;
}

export default Table;
