import expert from './assets/expert.png'
import bubble from './assets/bubble.png'
import note from './assets/note.png'
import start from './assets/start.png'

function App() {

  return (
    <div className="note">
      <img className="noteImg" src={note} alt="" />
      <div className='content'>
        <img className="bubble" src={bubble} alt="" />
        <img className='expert' src={expert} alt="" />
        <h2>Отправь «Экспертов» в космос!</h2>
        <p>Душные кликуши появляются и тут и там. Защитись от их «экспертных» оценок — прицелься и отправляй <br /> их в космос!</p>
        <img className='button' src={start} alt="" />
      </div>
    </div>
  );
}

export default App
