import React, { useState } from "react";
import { nanoid } from "nanoid";
import { superstate } from "@superstate/core";
import DataTable from "react-data-table-component";
import type { TableColumn } from "react-data-table-component";

import type { Phase, LineItem } from "./types";

const materials = [
  { id: "mat-1", name: "Material 1" },
  { id: "mat-2", name: "Material 2" },
];

const originalLineItems: LineItem[] = [
  {
    id: nanoid(),
    name: "Thing 1",
    material: "mat-1",
    coverage: "yes",
    quantity: 2,
    total: 100,
    isHidden: false,
    option: false,
    notes: {
      internal: "hello",
      external: "hi",
    },
  },
  {
    id: nanoid(),
    name: "Thing 2",
    material: "mat-2",
    coverage: "yes 2",
    quantity: 3,
    total: 1000,
    isHidden: true,
    option: false,
    notes: {
      internal: "hello",
      external: "hi",
    },
  },
];

function Table() {
  const [lineItems, setLineItems] = useState<LineItem[]>(originalLineItems);

  const columns: Array<TableColumn<LineItem>> = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Material",
      selector: (row) => row.material,
      cell: (row, index, column, id) => (
        <select
          name="materials"
          value={row.material}
          onChange={(e) => {
            const newItems = [...lineItems];
            newItems[index].material = e.target.value;

            setLineItems(newItems);
          }}
        >
          {materials.map((material) => (
            <option key={material.id} value={material.id}>
              {material.name}
            </option>
          ))}
        </select>
      ),
    },
    {
      name: "Coverage",
      selector: (row) => row.coverage,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      format: (row, index) => `${row.quantity}.00`,
    },
  ];

  return <DataTable columns={columns} data={lineItems} />;
}

export default Table;
