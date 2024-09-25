import { useState } from 'react';
import { CgCornerDownLeft } from 'react-icons/cg';

export default function AddMemo() {
  const [memo, setMemo] = useState<string>('');
  console.log(memo);

  const Add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={Add} className='flex flex-col p-4'>
      <label htmlFor='memo' className='mb-2 text-left font-bold text-gray-700'>
        Memo
      </label>
      <textarea
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        placeholder='Write your memo here'
        rows={5}
        className='mb-4 w-full resize-none rounded border border-gray-300 p-2'
      />
      <button
        type='submit'
        className='self-end rounded bg-green-500 p-2 text-white hover:bg-green-600'
      >
        <CgCornerDownLeft />
      </button>
    </form>
  );
}
