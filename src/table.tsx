import React from "react";
import { nanoid } from "nanoid";
import { superstate } from "@superstate/core";
import DataTable from "react-data-table-component";
import type { TableColumn } from "react-data-table-component";

import type { Phase } from "./types";
import { useSuperState } from "@superstate/react";

const phases = [
  superstate({
    id: nanoid(),
    name: "Phase 1",
    nameOverride: "",
    isNoCharge: false,
    optionPhase: true,
  }),
  superstate({
    id: nanoid(),
    name: "Phase 2",
    nameOverride: "",
    isNoCharge: true,
    optionPhase: false,
  }),
];

const phasesState = superstate(phases);

const columns: Array<TableColumn<Phase>> = [
  {
    name: "Title",
    selector: (row: Phase) => row.name,
  },
  {
    name: "Is No Charge",
    selector: (row: Phase) => row.isNoCharge,
    cell: (row, index, column, id) => (
      <>
        {/* <button
          onClick={() => {
            phasesState.set((prev) => [
              ...prev,
              prev[index].set((prev) => ({
                ...prev,
                isNoCharge: !prev.isNoCharge,
              })),
            ]);;
          }}
        >
          {row.isNoCharge ? "no charge" : "charge"}
        </button> */}
        {/* <p>{console.log(column)}</p> */}
      </>
    ),
  },
];

function Table() {
  useSuperState(phasesState);

  const data = phasesState.now().map((phase) => phase.now());

  return <DataTable columns={columns} data={data} />;
}

export default Table;
