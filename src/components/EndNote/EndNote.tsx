import expert from '../../assets/character2.svg'
import hand from '../../assets/hand.svg'
import button from '../../assets/fly.png'
import clickHand from '../../assets/clickHand.svg'
import cannot from '../../assets/cannot.svg'
import style from './EndNote.module.scss'
import { changeStep } from '../../store/stepReducer'
import { useAppDispatch } from '../../store/store'

const EndNote = () => {

  const dispatch = useAppDispatch()

  return (
    <div className='content'>
      <div className={style.expertBox}>
        <img src={expert} alt="" />
        <img className={style.cannot} src={cannot} alt="" />
      </div>
      <div className={style.hands}>
        <img src={hand} alt="" />
        <img className={style.click} src={clickHand} alt="" />
      </div>
      <p className={style.text}>но иногда появятся люди, чьи выводы вполне нормальны. Если в пузырь попадут они — с тебя штраф по времени!</p>
      <img onClick={() => {dispatch(changeStep('play'))}} className='button' src={button} alt="" />
    </div>
  )
}

export default EndNote