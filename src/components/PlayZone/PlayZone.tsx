import style from './PlayZone.module.scss'
import Expert from '../Expert/Expert'
import { experts } from '../../constants/constants'
import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { changeStep } from '../../store/stepReducer'
import Head from '../../assets/Head'
import Timer from '../../assets/Timer'

const PlayZone = () => {
  const [seconds, setSeconds] = useState(59)
  const [isNotLie, setIsNotLie] = useState(false)
  const interval = useRef<number>()
  const dispatch = useAppDispatch()
  const bubbleExperts = useAppSelector(state => state.expertsAmount.amount)

  const expertsMemo = useMemo(() => {
    return experts
  }, [])

  const minusTime = useCallback(() => setIsNotLie(true),[])
  
  useEffect(() => {
    if (isNotLie) setSeconds(seconds - 10)
    setIsNotLie(false)
  }, [isNotLie])

  useEffect(() => {
    interval.current = setInterval(() => {
        setSeconds(seconds => seconds-1)
    }, 1000)
  }, [])

  useEffect(() => {
    if (seconds <= 0 || bubbleExperts === 10) {
      dispatch(changeStep('result'))
      clearInterval(interval.current)
    }
  }, [seconds, bubbleExperts])
  

  return (
    <div className={style.play}>
      <div className={style.container}>
        <Head/>
        <span>{bubbleExperts}/10</span>
      </div>
      <div className={seconds > 30 ? style.container : `${style.container} ${style.hurry}`}>
        <Timer/>
        <span>
          00:{seconds.toString().length == 2 ? seconds : "0" + seconds}
        </span>
      </div>
      {expertsMemo.map((item) => (
        <Expert
          minusTime={minusTime}
          key={item.id}
          expert={item}
        />
      ))}
    </div>
  );
}

export default PlayZone