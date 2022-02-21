import styles from './index.module.css';
import Steps from './steps';
import Step from './step'
import { useEffect, useRef, ElementRef, useState } from 'react';

export default function ProgressStreps () {
  const steps = [1, 2, 3, 4]
  type stepsHndle = ElementRef<typeof Steps>
  let stepsRef = useRef<stepsHndle>(null)
  let [activeIndex, setActiveIndex] = useState(0)
  let [disabled, setDisabled] = useState('prev')

  const handleNext = () => {
    setActiveIndex((activeIndex) => {
      activeIndex++

      updateActiveIndex(activeIndex)

      return activeIndex
    })
  }

  const handlePrev = () => {
    setActiveIndex((activeIndex) => {
      activeIndex--

      updateActiveIndex(activeIndex)

      return activeIndex
    })
   
  }

  const updateDisabledBtn = (activeIndex: number) => {
    if (activeIndex <= 0) {
      setDisabled('prev')
    } else if (activeIndex >= steps.length - 1) {
      setDisabled('next')
    } else {
      setDisabled('')
    }
  }

  const updateActiveIndex = (activeIndex: number) => {
    setActiveIndex(() => {
      updateDisabledBtn(activeIndex)
      return activeIndex
    })
  } 

  return(
    <div className={styles.container}>
      <Steps activeIndex={activeIndex} updateActiveIndex={updateActiveIndex} ref={stepsRef}>
        {
          steps.map((step, index) => (<Step key={index}></Step>))
        }
      </Steps>

      <button className={styles.btn} id={styles.prev} disabled={disabled === 'prev'} onClick={handlePrev}>Prev</button>
      <button className={styles.btn} id={styles.next}  disabled={disabled === 'next'} onClick={handleNext}>Next</button>
    </div>
  )
}