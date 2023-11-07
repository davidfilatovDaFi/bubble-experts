import Note from './components/Note';
import PlayZone from './components/PlayZone/PlayZone';
import ResultNote from './components/ResultNote/ResultNote';
import { useAppSelector } from './store/store';

function App() {

  const step = useAppSelector(state => state.step.step)

  return (
    <div className='wrapper'>
      {step === "result" ? (
        <ResultNote />
      ) : (
        <div className=" wrapper wrapperDay">
          {step === "play" ? <PlayZone /> : <Note />}
        </div>
      )}
    </div>
  );
}

export default App
