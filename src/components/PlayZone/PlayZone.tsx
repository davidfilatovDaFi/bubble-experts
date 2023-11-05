import note from '../../assets/littleNote.svg'
import timer from '../../assets/timer.svg'
import style from './PlayZone.module.scss'
import head from '../../assets/head.svg'

const PlayZone = () => {
  return (
    <div className={style.play}>
      <div className={style.label}>
        <div className={style.container}>
          <img src={timer} alt="" />
          <span>00:16</span>
        </div>
        <img className={style.note} src={note} alt="" />
      </div>
      <div className={style.label}>
        <div className={style.container}>
          <img src={head} alt="" />
          <span>06/10</span>
        </div>
        <img className={style.note} src={note} alt="" />
      </div>
    </div>
  )
}

export default PlayZone