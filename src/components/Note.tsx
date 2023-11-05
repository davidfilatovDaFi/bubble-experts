import StartNote from './StartNote/StartNote'
import note from '../assets/note.png'
import MiddleNote from './MiddleNote/MiddleNote';
import EndNote from './EndNote/EndNote';
import { useAppSelector } from '../store/store';

const Note = () => {

  const step = useAppSelector(state => state.step.step)

  return (
    <div className="note">
      <div className="sky"></div>
      <img className="noteImg" src={note} alt="" />
      {step === "start" ? (
        <StartNote />
      ) : step === "middle" ? (
        <MiddleNote />
      ) : (
        <EndNote />
      )}
    </div>
  );
}

export default Note