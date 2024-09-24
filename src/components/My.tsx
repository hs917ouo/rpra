import { useState } from 'react';

type Props = {
  name: string;
};

export default function My({ name }: Props) {
  const [count, setCount] = useState(0);
  return (
    <>
      <p className='text-5xl font-bold'>{name}</p>
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
