import note from '../../assets/littleNote.svg'
import timer from '../../assets/timer.svg'
import style from './PlayZone.module.scss'
import head from '../../assets/head.svg'
import expert from '../../assets/character1.svg'
import expert2 from '../../assets/character2.svg'
import expert3 from '../../assets/character3.svg'
import expert4 from '../../assets/character4.svg'
import Expert from '../Expert/Expert'

const PlayZone = () => {

  const experts = [
    {
      id: 'e1',
      url: expert,
      phrase: 'right',
      lier: true
    },
    {
      id: 'e2',
      url: expert2,
      phrase: 'right',
      lier: true
    },
    {
      id: 'e3',
      url: expert3,
      phrase:'left',
      lier: true
    },
    {
      id: 'e4',
      url: expert4,
      phrase:'left',
      lier: false
    }
  ]

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
      {experts.map((item) => (
        <Expert key={item.id} expert={item}/>
      ))}
    </div>
  );
}

export default PlayZone