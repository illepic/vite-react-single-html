import React from "react";

import Button from "./button";
import ExampleCounter from "./example-counter";
import Table from "./table";

function App() {
  return (
    <div className="container mx-auto px-4">
      <header className="flex py-7">
        <div className="flex-1 text-center">
          <div className="text-green-500 text-xl">Name</div>
          <div>Lennar Homes - Portland</div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-green-500 text-xl">Customer Address</div>
          <div>123 Address St, City, State 12345</div>
        </div>
      </header>

      <div className="buttons py-6">
        <div className="flex py-3">
          <div className="pr-2">
            <Button>Proposal line items</Button>
          </div>
          <Button>Labor + margin</Button>
        </div>
        <div className="flex py-3">
          <div className="pr-2">
            <Button variant="action">Save and keep working</Button>
          </div>
          <div className="pr-2">
            <Button variant="action">Save and close</Button>
          </div>
          <Button variant="action">Print proposal</Button>
        </div>
      </div>

      <div className="pt-4">
        <Table />
      </div>

      <p>Phases goes here</p>
      <p>Incentives goes here</p>

      <div className="pt-10">
        <p>Example of react state</p>
        <ExampleCounter />
      </div>
    </div>
  );
}

export default App;
