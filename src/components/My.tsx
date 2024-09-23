import { useState } from 'react';

export default function My() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p className='text-5xl font-bold'>Hong</p>
      <div className='mt-2 flex justify-center'>
        <button
          className='m-3 rounded-md border border-gray-300 px-2 py-1 text-xl font-extrabold'
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </button>
        <p className='m-3 p-1'>{count}</p>
        <button
          className='m-3 rounded-md border border-gray-300 px-2 py-1 text-xl font-extrabold'
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
      </div>
    </>
  );
}
