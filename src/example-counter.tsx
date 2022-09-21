import React from "react";
import { superstate } from "@superstate/core";
import { useSuperState } from "@superstate/react";

const count = superstate(0);

function ExampleCounter() {
  useSuperState(count);

  return (
    <button
      className="px-4 py-1 text-white rounded-md bg-green-600 hover:bg-green-700"
      onClick={() => {
        count.set((prev) => prev + 1);
      }}
    >
      Count is {count.now()}
    </button>
  );
}

export default ExampleCounter;
