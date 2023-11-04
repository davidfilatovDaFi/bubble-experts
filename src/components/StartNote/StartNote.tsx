import expert from '../../assets/character1.svg'
import bubble from '../../assets/bubble.svg'
import start from '../../assets/start.png'
import style from './StartNote.module.scss'

const StartNote = () => {
  return (
    <div className='content'>
      <img className={style.bubble} src={bubble} alt="" />
      <img className={style.expert} src={expert} alt="" />
      <h2>Отправь «Экспертов» в космос!</h2>
      <p>Душные кликуши появляются и тут и там. Защитись от их «экспертных» оценок — прицелься и отправляй <br /> их в космос!</p>
      <img className='button' src={start} alt="" />
    </div>
  )
}

export default StartNote