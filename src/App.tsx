import { useState } from "react";

import Button from "./button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl mb-4 font-semibold">Phase proposal tool</h1>
      <header className="flex">
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

      <p>Table goes here</p>
      <p>Phases goes here</p>
      <p>Incentives goes here</p>

      <button
        className="px-4 py-1 text-white rounded-md bg-green-600 hover:bg-green-700"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default App;
