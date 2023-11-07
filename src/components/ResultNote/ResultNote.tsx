import note from '../../assets/note.png'
import style from './ResultNote.module.scss'
import up from '../../assets/up.svg'
import middle from '../../assets/middle.svg'
import down from '../../assets/down.svg'
import button from '../../assets/again.png'
import telegram from '../../assets/telegram.png'
import vk from '../../assets/vk.png'
import insta from '../../assets/insta.png'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { changeStep } from '../../store/stepReducer'
import { resetAmount } from '../../store/amountReducer'

const ResultNote = () => {

  const dispatch = useAppDispatch()
  const amount = useAppSelector(state => state.expertsAmount.amount)

  return (
    <div className={`wrapper ${style.wrapper}`}>
      <div className="note">
        <img className="noteImg" src={note} alt="" />
        <div className={style.content}>
          <div className={style.result}>
            <img src={amount >= 8 ? up : amount <= 2 ? down : middle} alt="" />
            <h2>
              Запущено {amount}
              /10 «экспертов»!
            </h2>
            <p className={style.text}>
              {amount >= 8
                ? "Один из последних из нас. кто четко знает где живет своя кукуха. Настоящий ловец «экспертов»!"
                : amount <= 2
                ? "Кажется, кое-кто поймал паническую белку или пересмотрел слишком много «экспертных» стримов. На улицу выйди, прогуляйся!"
                : "Последние нервные клетки держатся в твоей голове, но уже едва-едва. Попей чайку и подумай еще раз, прежде чем соглашаться со всем в интернете"}
            </p>
          </div>
          <div className={style.shareBox}>
            <img
              onClick={() => {
                dispatch(changeStep("play"));
                dispatch(resetAmount());
              }}
              className="button"
              src={button}
              alt=""
            />
            <span className={style.share}>поделиться</span>
            <div className={style.icons}>
              <img className={style.icon} src={telegram} alt="" />
              <img className={style.icon} src={vk} alt="" />
              <img className={style.icon} src={insta} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultNote