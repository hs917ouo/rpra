import './App.css';
import AddMemo from './components/AddMemo';
import Board from './components/Board';
import My from './components/My';

function App() {
  const name = '메밀꽃 필 무렵';
  const memos = [
    { id: 1, memo: '메밀꽃 필 무렵' },
    {
      id: 2,
      memo: '여름 장이란 애시당초에 글러서, 해는 아직 중천에 있건만 장판은 벌써 쓸쓸하고 더운 햇발이 벌여놓은 전 휘장 밑으로 등줄기를 훅훅 볶는다. 마을 사람들은 거의 돌아간 뒤요, 팔리지 못한 나무꾼패가 길거리에 궁깃거리고들 있으나, 석유병이나 받고 고깃마리나 사면 족할 이 축들을 바라고 언제까지든지 버티고 있을 법은 없다. 칩칩스럽게 날아드는 파리떼도 장난꾼 각다귀들도 귀찮다. 얽음뱅이요 왼손잡이인 드팀전의 허생원은 기어이 동업의 조선달을 나꾸어보았다.',
    },
    { id: 3, memo: '"그만 거둘까?"' },
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
