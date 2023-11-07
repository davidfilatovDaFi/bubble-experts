import rigthPhrase from '../../assets/phrase.svg'
import leftPhrase from '../../assets/lPhrase.svg'
import bubble from '../../assets/bubble.svg'
import cannot from '../../assets/cannot.svg'
import { FC, memo, useState } from 'react'

import style from './Expert.module.scss'
import { addExpert } from '../../store/amountReducer'
import { useAppDispatch } from '../../store/store'

interface IExpert {
  id: string
  url: string
  phrase: string
  lier: boolean
  text: string
}

const Expert: FC<{expert: IExpert, minusTime: () => void}> = memo(({expert, minusTime}) => {

  const [active, setActive] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const toBubbleExpert = () => {
    setActive(true)
    if (expert.lier) {
      dispatch(addExpert())
    } else {
      minusTime()
    }
  }

  return (
    <div
      className={
        active && expert.lier
          ? `${style.active} ${style.expert} ${style[expert.id]}`
          : active ? `${style.mistake} ${style.expert} ${style[expert.id]}`
          :`${style.expert} ${style[expert.id]}`
      }
    >
      <div
        className={`${active ? style.none : style.phraseBox} ${
          style[expert.phrase]
        }`}
      >
        <span>{expert.text}</span>
        <img
          className={style.phrase}
          src={expert.phrase === "right" ? rigthPhrase : leftPhrase}
          alt=""
        />
      </div>
      <img className={active && expert.lier ? style.rotate : ''} onClick={toBubbleExpert} src={expert.url} alt="" />
      {expert.lier 
      ? <img className={active ? style.bubble : style.none} src={bubble} alt="" />
      : <img className={active ? style.cannot : style.none} src={cannot} alt="" />}
    </div>
  );
})

export default Expert