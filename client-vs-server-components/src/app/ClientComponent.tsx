'use client'
import { useState, useLayoutEffect, useEffect } from "react";

type ClientComponentProps = {
  name: string;
}

export default function ClientComponent({ name }: ClientComponentProps) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('ClientComponent effect');
  }, []);

  useLayoutEffect(() => {
    console.log('ClientComponent layout effect');
  }, []);

  return (
    <div className="my-5">
      <h1 className="font-bold text-2xl">Client Component</h1>
      <p>Counter: {counter}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
      <p>{name}</p>
    </div>
  );
}