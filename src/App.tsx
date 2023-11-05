import Note from './components/Note';
import PlayZone from './components/PlayZone/PlayZone';
import { useAppSelector } from './store/store';

function App() {

  const step = useAppSelector(state => state.step.step)

  return (
    <div className='wrapper'>
      {step === 'play' ? <PlayZone/> : <Note/>}
    </div>
  );
}

export default App
