import expert from '../../assets/character1.svg'
import hand from '../../assets/hand.svg'
import button from '../../assets/okay.png'
import style from './MiddleNote.module.scss'
import clickHand from '../../assets/clickHand.svg'
import bubbleGuy from '../../assets/bubbleGuy.svg'
import { useAppDispatch } from '../../store/store'
import { changeStep } from '../../store/reducers'

const MiddleNote = () => {

  const dispatch = useAppDispatch()

  return (
    <div className='content'>
      <div className={style.experts}>
        <img className={style.expert} src={expert} alt="" />
        <img className={style.bubbleGuy} src={bubbleGuy} alt="" />
      </div>
      <div className={style.hands}>
        <img className={style.hand} src={hand} alt="" />
        <img className={style.click} src={clickHand} alt="" />
      </div>
      <p className={style.text}>Нажимай на «экспертов» и отравляй их к далеким далям в мыльных <br /> пузырях!</p>
      <img onClick={() => {dispatch(changeStep('end'))}} className='button' src={button} alt="" />
    </div>
  )
}

export default MiddleNote