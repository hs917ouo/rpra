type Props = {
  note: { id: number; memo: string }[];
};

export default function Board({ note }: Props) {
  return (
    <>
      {note.map((page) => (
        <div key={page.id} className='border-b p-2'>
          <p>{page.memo}</p>
        </div>
      ))}
    </>
  );
}
