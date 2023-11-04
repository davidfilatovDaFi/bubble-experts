import { FC } from 'react'
import StartNote from './StartNote/StartNote'
import note from '../assets/note.png'
import MiddleNote from './MiddleNote/MiddleNote';
import EndNote from './EndNote/EndNote';

const Note: FC<{type: string}> = ({type}) => {

  return (
    <div className="note">
      <div className="sky"></div>
      <img className="noteImg" src={note} alt="" />
      {type === "start" ? (
        <StartNote />
      ) : type === "middle" ? (
        <MiddleNote />
      ) : (
        <EndNote />
      )}
    </div>
  );
}

export default Note