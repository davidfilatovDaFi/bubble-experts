import rigthPhrase from '../../assets/phrase.svg'
import leftPhrase from '../../assets/lPhrase.svg'
import bubble from '../../assets/bubble.svg'
import cannot from '../../assets/cannot.svg'
import { FC, useState } from 'react'

import style from './Expert.module.scss'

interface IExpert {
  id: string
  url: string
  phrase: string
  lier: boolean
}

const Expert: FC<{expert: IExpert}>  = ({expert}) => {

  const [active, setActive] = useState<boolean>(false)

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
        <span>дневные свечи на золото видел?</span>
        <img
          className={style.phrase}
          src={expert.phrase === "right" ? rigthPhrase : leftPhrase}
          alt=""
        />
      </div>
      <img onClick={() => setActive(true)} src={expert.url} alt="" />
      {expert.lier 
      ? <img className={active ? style.bubble : style.none} src={bubble} alt="" />
      : <img className={active ? style.cannot : style.none} src={cannot} alt="" />}
    </div>
  );
}

export default Expert