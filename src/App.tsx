import './App.css';
import AddMemo from './components/AddMemo';
import Board from './components/board';
import My from './components/My';

function App() {
  const name = 'Kim';
  const memos = [
    { id: 1, memo: 'This is the first memo' },
    { id: 2, memo: 'This is the second memo' },
  ];
  return (
    <>
      <My name={name} />
      <AddMemo />
      <Board note={memos} />
    </>
  );
}

export default App;
